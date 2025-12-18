export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { verifyPasswordlessOTP, getUserInfo } from "@/lib/auth0/passwordless";

export async function POST(req) {
  try {
    const { email, otp } = await req.json();

    // Validate inputs
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Please provide a valid email address" 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (!otp || otp.length < 6 || !/^\d+$/.test(otp)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Please provide a valid OTP code" 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Verify OTP using Auth0 Passwordless
    const tokenData = await verifyPasswordlessOTP(email, otp);

    // Get user information from the token
    const userInfo = await getUserInfo(tokenData.accessToken);

    // Calculate expiration timestamp
    const expiresAt = Date.now() + (tokenData.expiresIn * 1000);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "OTP verified successfully",
        data: {
          user: {
            id: userInfo.sub || userInfo.email, // Auth0 user ID (sub claim)
            email: userInfo.email,
          },
          accessToken: tokenData.accessToken,
          idToken: tokenData.idToken,
          expiresAt: expiresAt,
          expiresIn: tokenData.expiresIn,
        }
      }),
      {
        status: 200,
        headers: { 
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Verify OTP API error:", error);
    
    // Handle specific error cases
    let errorMessage = "Invalid OTP. Please try again.";
    let errorCode = 'verification_failed';
    
    if (error.message.includes('grant type') || error.message.includes('not allowed')) {
      errorMessage = "Passwordless OTP grant type is not enabled. Please enable it in Auth0 Dashboard: Applications → b2bcampus → Settings → Advanced Settings → Grant Types";
      errorCode = 'grant_type_disabled';
    } else if (error.message.includes('expired') || error.message.includes('invalid')) {
      errorMessage = error.message || "OTP has expired or is invalid. Please request a new code.";
      errorCode = 'otp_expired';
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: errorMessage,
        code: errorCode
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}


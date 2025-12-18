export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { sendPasswordlessOTP } from "@/lib/auth0/passwordless";

export async function POST(req) {
  try {
    const { email } = await req.json();

    // Validate email
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

    // Send OTP using Auth0 Passwordless
    const result = await sendPasswordlessOTP(email);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "OTP sent successfully to your email",
        data: {
          email: result.email,
        }
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Send OTP API error:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Failed to send OTP. Please try again." 
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}


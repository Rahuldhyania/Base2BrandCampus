export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { getUserInfo } from "@/lib/auth0/passwordless";

/**
 * Enrollment/Login API
 * This endpoint handles the enrollment process after OTP verification.
 * It verifies the Auth0 token and confirms enrollment completion.
 */
export async function POST(req) {
  try {
    const { email, userId, accessToken } = await req.json();

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

    if (!userId || !accessToken) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Invalid session. Please verify OTP again." 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Verify the access token and get user info from Auth0
    try {
      const userInfo = await getUserInfo(accessToken);

      // Verify the user email and ID match
      if (userInfo.email?.toLowerCase() !== email.toLowerCase()) {
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: "Email mismatch. Please verify OTP again." 
          }),
          {
            status: 401,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      if (userInfo.sub !== userId) {
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: "User ID mismatch. Please verify OTP again." 
          }),
          {
            status: 401,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      // Process enrollment
      return await processEnrollment(email, userInfo);
    } catch (tokenError) {
      console.error("Auth0 token verification error:", tokenError);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Invalid or expired token. Please verify OTP again." 
        }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("Enrollment/Login API error:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Internal server error. Please try again later." 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

async function processEnrollment(email, userInfo) {
  try {
    // Return success response without CRM integration
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Enrollment completed successfully",
        data: {
          user: {
            id: userInfo.sub,
            email: userInfo.email,
            name: userInfo.name,
          },
          loggedIn: true,
          enrolled: true,
        }
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Enrollment processing error:", error);
    throw error;
  }
}


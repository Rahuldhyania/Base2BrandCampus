/**
 * Auth0 Passwordless Authentication Helper
 * Handles sending and verifying OTP codes via email
 */

import { getAuth0Config, getAuth0ManagementToken } from './config';

/**
 * Send passwordless OTP code via email
 * Uses Auth0 Authentication API (public endpoint)
 */
export async function sendPasswordlessOTP(email) {
  const { domain, clientId, connection } = getAuth0Config();

  try {
    // Use Auth0 Authentication API to send passwordless email
    // This is a public endpoint, no token needed
    const response = await fetch(`https://${domain}/passwordless/start`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        connection: connection,
        email: email.toLowerCase().trim(),
        send: 'code', // Send OTP code (not magic link)
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error_description || error.error || 'Failed to send OTP');
    }

    const data = await response.json();
    return {
      success: true,
      email: email,
      // Auth0 doesn't return the code in API response for security
    };
  } catch (error) {
    console.error('Auth0 passwordless OTP send error:', error);
    throw error;
  }
}

/**
 * Verify passwordless OTP code
 */
export async function verifyPasswordlessOTP(email, otp) {
  const { domain, clientId, connection } = getAuth0Config();

  try {
    // Verify OTP using Auth0 Authentication API
    // Note: For passwordless OTP, the grant type must be enabled in Auth0 Dashboard
    // The 'realm' parameter should be the connection name (same as connection)
    const response = await fetch(`https://${domain}/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        connection: connection,
        realm: connection, // Realm is the connection name for passwordless
        grant_type: 'http://auth0.com/oauth/grant-type/passwordless/otp',
        username: email.toLowerCase().trim(),
        otp: otp,
        scope: 'openid profile email',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.error_description || errorData.error || 'Invalid OTP';
      
      // Provide helpful error message for grant type issues
      if (errorMessage.includes('grant type') || errorMessage.includes('not allowed')) {
        throw new Error(
          `Grant type not enabled. Please enable passwordless OTP grant type in Auth0 Dashboard: ` +
          `Applications → b2bcampus → Settings → Advanced Settings → Grant Types → Enable "Passwordless OTP" or change Application Type to "Regular Web Application"`
        );
      }
      
      throw new Error(errorMessage);
    }

    const data = await response.json();
    
    return {
      success: true,
      accessToken: data.access_token,
      idToken: data.id_token,
      expiresIn: data.expires_in,
      tokenType: data.token_type,
      // Decode user info from id_token if needed
    };
  } catch (error) {
    console.error('Auth0 passwordless OTP verify error:', error);
    throw error;
  }
}

/**
 * Get user info from Auth0 token
 */
export async function getUserInfo(accessToken) {
  const { domain } = getAuth0Config();

  try {
    const response = await fetch(`https://${domain}/userinfo`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to get user info');
    }

    return await response.json();
  } catch (error) {
    console.error('Auth0 get user info error:', error);
    throw error;
  }
}


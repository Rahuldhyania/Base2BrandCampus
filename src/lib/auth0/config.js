/**
 * Auth0 Configuration Helper
 * Make sure to set these environment variables in .env.local
 */

export const getAuth0Config = () => {
  // Support both AUTH0_DOMAIN and AUTH0_ISSUER_BASE_URL
  let domain = process.env.AUTH0_DOMAIN;
  
  // If AUTH0_DOMAIN is not set, extract from AUTH0_ISSUER_BASE_URL
  if (!domain && process.env.AUTH0_ISSUER_BASE_URL) {
    // Extract domain from https://dev-xxx.us.auth0.com format
    const issuerUrl = process.env.AUTH0_ISSUER_BASE_URL;
    domain = issuerUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
  }
  
  const clientId = process.env.AUTH0_CLIENT_ID;
  const clientSecret = process.env.AUTH0_CLIENT_SECRET;
  const audience = process.env.AUTH0_AUDIENCE || (domain ? `https://${domain}/api/v2/` : undefined);
  const connection = process.env.AUTH0_CONNECTION || 'email'; // Passwordless email connection

  if (!domain || !clientId || !clientSecret) {
    throw new Error(
      'Missing Auth0 configuration. Please set either AUTH0_DOMAIN or AUTH0_ISSUER_BASE_URL, along with AUTH0_CLIENT_ID and AUTH0_CLIENT_SECRET in .env.local'
    );
  }

  return {
    domain,
    clientId,
    clientSecret,
    audience,
    connection,
  };
};

/**
 * Get Auth0 Management API token
 * This is needed for passwordless authentication
 */
export async function getAuth0ManagementToken() {
  const { domain, clientId, clientSecret } = getAuth0Config();
  
  try {
    const response = await fetch(`https://${domain}/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        audience: `https://${domain}/api/v2/`,
        grant_type: 'client_credentials',   
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Auth0 token request failed: ${JSON.stringify(error)}`);
    }
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error getting Auth0 management token:', error);
    throw error;
  }
}


import * as crypto from 'crypto';

const generateState = () => {
  return crypto.randomBytes(32).toString('hex');
};

const generateGoogleOAuthURL = ({
  scope,
  state,
}: {
  scope: string[];
  state?: string;
}) => {
  const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';

  const options = new URLSearchParams({
    redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URL as string,
    client_id: process.env.GOOGLE_CLIENT_ID as string,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: scope.join(' '),
  });

  if (state) {
    options.append('state', state);
  }

  return `${rootUrl}?${options}`;
};

const getGoogleOAuthTokens = async ({ code }: { code: string }) => {
  const url = 'https://oauth2.googleapis.com/token';

  const values = new URLSearchParams({
    code,
    client_id: process.env.GOOGLE_CLIENT_ID as string,
    client_secret: process.env.GOOGLE_CLIENT_SECRET as string,
    redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URL as string,
    grant_type: 'authorization_code',
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: values,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('Unknown error');
  }
};

const getGoogleUser = async ({ accessToken }: { accessToken: string }) => {
  try {
    const response = await fetch(
      'https://www.googleapis.com/oauth2/v2/userinfo',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error('Unknown error');
  }
};

export {
  generateState,
  generateGoogleOAuthURL,
  getGoogleOAuthTokens,
  getGoogleUser,
};

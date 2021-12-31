import { post } from './api';

export const generateCustomToken = async (
  id: string,
): Promise<string | null> => {
  const { token } = (await post('GenerateCustomToken', { id })) as {
    status: string;
    token: string;
  };

  return token ?? null;
};

export const generateSessionCookie = async (
  token: string,
): Promise<string | null> => {
  const { sessionCookie } = (await post('GenerateSessionCookie', {
    token,
  })) as {
    status: string;
    sessionCookie: string;
  };

  return sessionCookie ?? null;
};

export const verifySessionCookie = async (
  sessionCookie: string,
): Promise<string | null> => {
  const { status, token } = (await post('VerifySessionCookie', {
    sessionCookie,
  })) as {
    status: string;
    token: string;
  };

  if (status === 'ok') {
    return token;
  }

  return null;
};

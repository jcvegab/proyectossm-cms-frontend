import cookies from './index';

export const getCookie = (key: string): string => {
  return cookies.get(key);
};

export const setCookie = (key: string, value: string): void => {
  cookies.set(key, value, { path: '/' });
};

export const removeCookie = (key: string): void => {
  cookies.remove(key, { path: '/' });
};

export const cleanCookies = (keys: string[]): void => {
  keys.forEach(key => {
    removeCookie(key);
  });
};

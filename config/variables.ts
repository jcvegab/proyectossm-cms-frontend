// Config
const NODE_ENV = process.env.NODE_ENV;
const REACT_APP_SUPPORT_EMAIL = process.env.REACT_APP_SUPPORT_EMAIL || '';
const REACT_APP_SECRET_WORD = process.env.REACT_APP_SECRET_WORD || '';
// Backend
const REACT_APP_HOST = process.env.REACT_APP_HOST;

export const isDev = NODE_ENV !== 'production';

export const SUPPORT_EMAIL = REACT_APP_SUPPORT_EMAIL;
export const SECRET_WORD = REACT_APP_SECRET_WORD;

export const HOST = REACT_APP_HOST;

export const FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_FS_CONF_API_KEY,
  authDomain: process.env.REACT_APP_FS_CONF_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FS_CONF_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FS_CONF_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FS_CONF_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FS_CONF_APP_ID,
  measurementId: process.env.REACT_APP_FS_CONF_MEASUREMENT_ID,
};

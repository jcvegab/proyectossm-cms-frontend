/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    REACT_APP_FS_CONF_API_KEY: process.env.FS_API_KEY,
    REACT_APP_FS_CONF_AUTH_DOMAIN: process.env.FS_AUTH_DOMAIN,
    REACT_APP_FS_CONF_PROJECT_ID: process.env.FS_PROJECT_ID,
    REACT_APP_FS_CONF_STORAGE_BUCKET: process.env.FS_STORAGE_BUCKET,
    REACT_APP_FS_CONF_MESSAGING_SENDER_ID: process.env.FS_MESSAGING_SENDER_ID,
    REACT_APP_FS_CONF_APP_ID: process.env.FS_APP_ID,
    REACT_APP_FS_CONF_MEASUREMENT_ID: process.env.FS_MEASUREMENT_ID,
  },
};

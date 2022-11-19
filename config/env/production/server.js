// Path: ./config/env/production/server.js`

module.exports = ({ env }) => ({
  url: env("MY_HEROKU_URL"),
  keys: env.array("APP_KEYS"),
});

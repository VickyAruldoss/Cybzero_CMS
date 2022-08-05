module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9fb2e308e612c0d5e20e0a5d3dd0d495'),
  },
});

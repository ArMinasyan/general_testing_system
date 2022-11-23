export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  postgres: {
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT, 10) || 5432,
    username: process.env.PG_USERNAME || 'postgres',
    password: process.env.PG_PASSWORD || 'postgres',
    db: process.env.PG_DATABASE,
    sync: true,
    logging: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    algorithm: 'HS256',
    expires: '1m',
  },
});

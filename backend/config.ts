export default () => ({
    database: {
      host: process.env.POSTGRES_HOST || 'postgres',
      port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
      name: process.env.POSTGRES_DB || 'kupipodariday',
      usename: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'password',
    },
    appServer: {
      port: parseInt(process.env.APP_SERVER_PORT, 10) || 3000,
      host: process.env.APP_SERVER_HOSTNAME || 'localhost',
    },
    jwt: {
      expiresin: process.env.JWT_EXPIRESIN || '1D',
      secret: process.env.JWT_SECRET || 'super_wichtig_geheimnis',
    },
    bcrypt: {
      gensalt_rounds: parseInt(process.env.BCRYPT_GENSALT_ROUNDS, 10) || 10,
    },
  });
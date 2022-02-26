require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

module.exports = {
  host: process.env.DB_HOST,
  storage: process.env.DB_STORAGE,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
  ssl: process.env.DB_SSL,
  logging: false,
  dialectOptions: {
    ssl: process.env.DB_SSL,
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

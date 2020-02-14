module.exports = {
  development: {
    dialect: 'sqlite',
    storage: 'db/dev.sqlite'
  },
  test: {
    dialect: 'sqlite',
    storage: 'db/test.sqlite'
  },
  production: process.env.DATABASE_URL
};

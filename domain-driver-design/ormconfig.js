const connection = process.env.DB_CONNECTION;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const environment = process.env.NODE_ENV;
const db_url = process.env.DB_URL;

module.exports = {
  type: connection,
  "url": db_url,
  "useNewUrlParser": true,
  "synchronize": true,
  "logging": true,

  entities: ['dist/**/*.entity.js'],

  //migrationsRun: environment === 'test', // I prefer to run manually in dev
  //migrationsTableName: 'migrations',
  //migrations: ['dist/infrastructure/database/postgres/migrations/*.js'],
  //cli: {
  //  migrationsDir: 'src/infrastructure/database/postgres/migrations',
  //},
};

import { ConnectionOptions } from 'typeorm';

const connection = process.env.DB_CONNECTION;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const environment = process.env.NODE_ENV;
const db_url = process.env.TYPEORM_URL;

// Check typeORM documentation for more information.
const dbconfig: ConnectionOptions = {
    type: 'mongodb',
    url: process.env.TYPEORM_URL || '',

    // entities name should be **.entity.ts
    entities: ['dist/**/*.entity.js'],

    // We are using migrations, synchronize should be set to false.
    // synchronize: process.env.TYPEORM_SYNCHRONIZE
    //  ? process.env.TYPEORM_SYNCHRONIZE.toLowerCase() === 'true'
    //  : false,
    synchronize: true,

    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    //migrationsRun: false,

    logging: true,
    "useNewUrlParser": true,
    // logger: 'advanced-console',

    // Allow both start:prod and start:dev to use migrations
    // __dirname is either dist or src folder, meaning either
    // the compiled js in prod or the ts in dev.
    //migrations: [__dirname + '/migrations/*{.ts,.js}'],
    //cli: {
        // Location of migration should be inside src folder
        // to be compiled into dist/ folder.
    //    migrationsDir: 'src/database/migrations'
    //}
};

export = dbconfig;
import { MongoConnectionOptions } from "typeorm/driver/mongodb/MongoConnectionOptions";

const connection = process.env.DB_CONNECTION;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const environment = process.env.NODE_ENV;
const db_url = process.env.TYPEORM_URL;

export const OrmConfig: MongoConnectionOptions = {
    "type": "mongodb",
    //host: host,
    //port: Number(port),
    //username: username,
    //password: password,
    //database: database,
    url: db_url,
    "entities": [`${__dirname}/**/*.entity{.ts,.js}`],
    "synchronize": true
}
import { Knex } from "knex";
import { env } from "../app/base/helpers";

const database: Knex.Config = {
    /**
     * --------------------------------------------------------------------------
     * Database driver | mysql, pg, postgres, sqlite3, better-sqlite3, mssql etc 
     * --------------------------------------------------------------------------
     */
    client: env('DB_CONNECTION', 'mysql'),
    connection: {
        connectionString: env('DATABASE_URL'),
        database: env('DB_DATABASE', 'nodejs_test'),
        user: env('DB_USER', 'root'),
        host: env('DB_HOST', '127.0.0.1'),
        password: env('DB_PASSWORD', ''),
        port: env('DB_PORT') ? Number(env('DB_PORT')) : undefined,
    },
    migrations: {
        directory: 'migrations',
        tableName: 'migrations',
        extension: 'ts',
        loadExtensions: ['ts']
    },
    seeds: {
        directory: 'seeds',
        extension: 'ts',
        loadExtensions: ['ts']

    }
}

export default database;
import mysql from 'serverless-mysql';

export const conn= mysql({
    config: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'modelado',
        port: 3307,
        ssl: false

    }
});

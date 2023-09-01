import mysql from 'serverless-mysql';

export const conn= mysql({
    config: {
        host: 'db4free.net',
        user: 'jpguanin',
        password: 'Jean050720.',
        database: 'modelado',
        port: 3306,
        ssl: false

    }
});

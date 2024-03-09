const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'road',
    password: 'root',
    port: 5432,
});

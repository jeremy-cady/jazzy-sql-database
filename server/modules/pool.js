const pg = require('pg');

const pool = new pg.Pool({
    database: 'music_library',
    host: 'localhost',
    port: 5432
});

module.exports = pool;
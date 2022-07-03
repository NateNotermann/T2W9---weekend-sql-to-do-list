const pg = require('pg');
const Pool = pg.Pool;

const pool = new Pool({
    database: 'weekend-to-do-app', // name of db
    host: 'localhost',  //ip of server
    port: 5432,  // postgres always uses 5432
    max: 10,  // max # of queries
    idleTimeoutMillis: 30000, // max time to connect
});

pool.on('connect', () => {
    console.log('Postgres Connected (in pool.js file');
});

pool.on('error', (error) => {
    console.log('Error connecting to Postgres', error );
});







module.exports = pool;
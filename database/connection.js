const {pool, Pool} = require('pg');

const conn = new Pool({
  connectionString: process.env.DB_URL,
  connectionTimeoutMillis: 10000
});


module.exports = conn;

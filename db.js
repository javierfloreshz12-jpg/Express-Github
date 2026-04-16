const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'reactdb',
  password: 'Fimas@15',
  port: 5432,
});

module.exports = pool;

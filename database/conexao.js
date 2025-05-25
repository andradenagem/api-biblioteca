const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',         // nome do usuário do PostgreSQL
  host: 'localhost',
  database: 'biblioteca',   // nome do banco de dados
  password: 'minhasenha123', // substitua pela senha do usuário postgres, se houver
  port: 5432
});
module.exports = pool;

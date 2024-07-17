import 'dotenv/config';
import mariadb from 'mariadb';

const pool = mariadb.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'test',
});

pool.getConnection()
  .then(conn => {
    console.log('Connected as id ' + conn.threadId);
    conn.release(); // Releasing the connection back to the pool
  })
  .catch(err => {
    console.error('Error connecting: ' + err.stack);
  });

export default pool;

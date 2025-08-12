const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'onehost-wphn092402.000nethost.com',
  user: process.env.DB_USER || 'iomwrnahhosting_xoso',
  password: process.env.DB_PASSWORD || 'Xosombvn@12345',
  database: process.env.DB_NAME || 'iomwrnahhosting_xoso',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
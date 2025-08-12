const app = require('./app');
const pool = require('./config/database');
const fileCache = require('./utils/fileCache'); // Sửa dòng này

const PORT = process.env.PORT || 3000;

// Khởi tạo database
async function initializeDatabase() {
  try {
    const connection = await pool.getConnection();
    
    // Tạo database nếu chưa tồn tại
    // await connection.query("CREATE DATABASE IF NOT EXISTS xoso_db");
    // await connection.query("USE xoso_db");
    
    // Tạo bảng
    await connection.query(`
      CREATE TABLE IF NOT EXISTS ketqua (
        id INT AUTO_INCREMENT PRIMARY KEY,
        date DATE NOT NULL,
        mien ENUM('mb', 'mt', 'mn') NOT NULL,
        giaidacbiet VARCHAR(10) NOT NULL,
        giaithuong JSON NOT NULL,
        UNIQUE KEY unique_date_mien (date, mien)
      )
    `);
    
    connection.release();
    console.log("Database initialized");
  } catch (error) {
    console.error("Database initialization failed:", error);
  }
}

// Khởi động server
app.listen(PORT, async () => {
  console.log(`API server running at http://localhost:${PORT}`);
  
  // Đảm bảo thư mục cache tồn tại - SỬA DÒNG NÀY
  await fileCache.ensureCacheDir();
  
  // Khởi tạo database
  await initializeDatabase();
});
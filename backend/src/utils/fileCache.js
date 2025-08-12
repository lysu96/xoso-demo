const fs = require('fs').promises;
const path = require('path');
const zlib = require('zlib');

const CACHE_DIR = path.join(__dirname, '../cache');

async function ensureCacheDir() {
  try {
    await fs.mkdir(CACHE_DIR, { recursive: true });
    console.log(`Cache directory ensured: ${CACHE_DIR}`);
  } catch (err) {
    console.error('Cannot create cache directory:', err);
  }
}

async function setCache(key, data, ttl = 300) {
  await ensureCacheDir();
  const filePath = path.join(CACHE_DIR, `${key}.json.gz`);
  
  try {
    const content = JSON.stringify({
      expires: Date.now() + ttl * 1000,
      data
    });
    
    const compressed = zlib.gzipSync(content);
    await fs.writeFile(filePath, compressed);
    return true;
  } catch (err) {
    console.error('Cache write error:', err);
    return false;
  }
}

async function getCache(key) {
  await ensureCacheDir();
  const filePath = path.join(CACHE_DIR, `${key}.json.gz`);
  
  try {
    const compressed = await fs.readFile(filePath);
    const decompressed = zlib.gunzipSync(compressed);
    const { expires, data } = JSON.parse(decompressed.toString());
    
    if (expires > Date.now()) {
      return data;
    }
    
    await fs.unlink(filePath);
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.error('Cache read error:', err);
    }
  }
  return null;
}

async function deleteCache(key) {
  const filePath = path.join(CACHE_DIR, `${key}.json.gz`);
  try {
    await fs.unlink(filePath);
    return true;
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.error('Cache delete error:', err);
    }
    return false;
  }
}

module.exports = {
  setCache,
  getCache,
  deleteCache,
  ensureCacheDir
};
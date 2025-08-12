const KetQua = require('../models/ketquaModel');
const { getCache, setCache, deleteCache } = require('../utils/fileCache');

const CACHE_TTL = 300; // 5 phút

const xosoService = {
  getAllResults: async () => {
    // Không cache cho toàn bộ dữ liệu vì có thể lớn
    return await KetQua.getAll();
  },

  getResultByDateRegion: async (date, region) => {
    const cacheKey = `result_${date}_${region}`;
    
    // 1. Kiểm tra cache
    const cachedData = await getCache(cacheKey);
    if (cachedData) {
      return cachedData;
    }
    
    // 2. Lấy từ database
    const result = await KetQua.getByDateRegion(date, region);
    
    if (result) {
      // 3. Lưu vào cache
      await setCache(cacheKey, result, CACHE_TTL);
    }
    
    return result;
  },

  createResult: async (data) => {
    const id = await KetQua.create(data);
    
    // Xóa cache liên quan
    const cacheKey = `result_${data.date}_${data.mien}`;
    await deleteCache(cacheKey);
    
    return id;
  },

  updateResult: async (id, data) => {
    await KetQua.update(id, data);
    
    // Xóa cache liên quan
    const cacheKey = `result_${data.date}_${data.mien}`;
    await deleteCache(cacheKey);
  },

  deleteResult: async (id) => {
    // Cần lấy thông tin date và mien trước khi xóa
    const result = await KetQua.getById(id);
    
    if (result) {
      await KetQua.delete(id);
      
      // Xóa cache liên quan
      const cacheKey = `result_${result.date}_${result.mien}`;
      await deleteCache(cacheKey);
    }
  }
};

module.exports = xosoService;
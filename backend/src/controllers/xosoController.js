const xosoService = require('../services/xosoService');
const responseHandler = require('../utils/responseHandler');
const errorHandler = require('../utils/errorHandler');

const xosoController = {
  getAll: async (req, res) => {
    try {
      const results = await xosoService.getAllResults();
      responseHandler.success(res, 'Lấy dữ liệu thành công', results);
    } catch (error) {
      errorHandler.serverError(res, error.message);
    }
  },

  getByDateRegion: async (req, res) => {
    try {
      const result = await xosoService.getResultByDateRegion(
        req.params.date, 
        req.params.mien
      );
      
      if (!result) {
        return errorHandler.notFound(res, 'Không tìm thấy kết quả');
      }
      
      responseHandler.success(res, 'Lấy dữ liệu thành công', result);
    } catch (error) {
      errorHandler.serverError(res, error.message);
    }
  },

  create: async (req, res) => {
    try {
      const id = await xosoService.createResult(req.body);
      responseHandler.created(res, 'Thêm kết quả thành công', { id });
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        return errorHandler.conflict(res, 'Kết quả đã tồn tại');
      }
      errorHandler.serverError(res, error.message);
    }
  },

  update: async (req, res) => {
    try {
      await xosoService.updateResult(req.params.id, req.body);
      responseHandler.success(res, 'Cập nhật thành công');
    } catch (error) {
      errorHandler.serverError(res, error.message);
    }
  },

  delete: async (req, res) => {
    try {
      await xosoService.deleteResult(req.params.id);
      responseHandler.success(res, 'Xóa thành công');
    } catch (error) {
      errorHandler.serverError(res, error.message);
    }
  }
};

module.exports = xosoController;
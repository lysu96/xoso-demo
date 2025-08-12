module.exports = {
  notFound: (res, message) => {
    res.status(404).json({
      success: false,
      error: message
    });
  },
  
  conflict: (res, message) => {
    res.status(409).json({
      success: false,
      error: message
    });
  },
  
  serverError: (res, error) => {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Lỗi máy chủ nội bộ'
    });
  },
  
  validationError: (res, errors) => {
    res.status(400).json({
      success: false,
      errors
    });
  }
};
module.exports = {
  success: (res, message, data = null) => {
    res.status(200).json({
      success: true,
      message,
      data
    });
  },
  
  created: (res, message, data = null) => {
    res.status(201).json({
      success: true,
      message,
      data
    });
  }
};
const express = require('express');
const router = express.Router();
const xosoController = require('../controllers/xosoController');

router.get('/', xosoController.getAll);
router.get('/:date/:mien', xosoController.getByDateRegion);
router.post('/', xosoController.create);
router.put('/:id', xosoController.update);
router.delete('/:id', xosoController.delete);

module.exports = router;
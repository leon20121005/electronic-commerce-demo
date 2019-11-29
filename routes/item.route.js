const express = require('express');
const router = express.Router();

const item_controller = require('../controllers/item.controller');

router.get('/', item_controller.index);
router.get('/:id', item_controller.show);

module.exports = router;

const express = require('express');
const router = express.Router();

const item_controller = require('../controllers/item.controller');

router.get('/', item_controller.index);
router.post('/', item_controller.create);
router.get('/new', item_controller.new);
router.get('/:id', item_controller.show);

module.exports = router;

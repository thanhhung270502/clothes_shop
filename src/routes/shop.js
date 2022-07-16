const express = require('express');
const router = express.Router();

const shopConTroller = require('../app/controllers/ShopConTroller');

router.get('/create', shopConTroller.create);
router.post('/store', shopConTroller.store);
router.get('/:id/edit', shopConTroller.edit);
router.put('/:id', shopConTroller.update);
router.get('/:slug', shopConTroller.show);

module.exports = router;

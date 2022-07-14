const express = require('express');
const router = express.Router();

const shopConTroller = require('../app/controllers/ShopConTroller');

router.get('/create', shopConTroller.create);
router.post('/store', shopConTroller.store);
router.get('/:slug', shopConTroller.show);
// router.use('/', shopConTroller.index);

module.exports = router;

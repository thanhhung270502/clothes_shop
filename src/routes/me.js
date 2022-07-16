const express = require('express');
const router = express.Router();

const meConTroller = require('../app/controllers/MeController');

router.get('/stored/products', meConTroller.storedProducts);
// router.use('/', shopConTroller.index);

module.exports = router;

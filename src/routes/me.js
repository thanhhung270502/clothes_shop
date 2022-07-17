const express = require('express');
const router = express.Router();

const meConTroller = require('../app/controllers/MeController');

router.get('/stored/products', meConTroller.storedProducts);
router.get('/trash/products', meConTroller.trashProducts);
// router.use('/', shopConTroller.index);

module.exports = router;

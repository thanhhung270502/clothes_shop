const Product = require('../models/Product');

class MeController {
    // [GET] /me/stored/products
    storedProducts(req, res, next) {
        Product.find({})
            .then((products) => res.render('me/stored-products', { products }))
            .catch(next);
    }
}

module.exports = new MeController();

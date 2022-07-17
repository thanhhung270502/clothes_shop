const Product = require('../models/Product');

class MeController {
    // [GET] /me/stored/products
    storedProducts(req, res, next) {
        Product.find({})
            .then((products) => res.render('me/stored-products', { products }))
            .catch(next);
    }

    // [GET] /me/trash/products
    trashProducts(req, res, next) {
        Product.findDeleted({})
            .then((products) => res.render('me/trash-products', { products }))
            .catch(next);
    }
}

module.exports = new MeController();

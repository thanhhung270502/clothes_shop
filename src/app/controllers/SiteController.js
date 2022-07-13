const Product = require('../models/Product');

class SiteConTroller {
    // [GET] /
    index(req, res, next) {
        Product.find({})
            .then((products) => res.render('home', { products }))
            .catch(next);

        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteConTroller();

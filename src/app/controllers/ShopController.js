const Product = require('../models/Product');
const { mongooseToObject } = require('../../util/mongoose');

class ShopConTroller {
    // [GET] /
    // index(req, res, next) {
    //     Product.find({})
    //         .then((products) => res.render('home', { products }))
    //         .catch(next);

    //     // res.render('home');
    // }

    // [GET] /shop/:slug
    show(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .then((products) => {
                res.render('shop/show', { products: mongooseToObject(products) });
                // res.json(product);
            })
            .catch(next);
    }

    // [GET] /shop/create
    create(req, res, next) {
        res.render('shop/create');
    }

    // [POST] /shop/store
    store(req, res, next) {
        const product = new Product(req.body);

        product
            .save()
            .then(() => res.redirect('/'))
            .catch(next);
    }

    // [GET] /shop/:id/edit
    edit(req, res, next) {
        Product.findById(req.params.id)
            .then((product) => res.render('shop/edit', { product: mongooseToObject(product) }))
            .catch(next);
    }

    // [PUT] /shop/:id
    update(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/products'))
            .catch(next);
    }
}

module.exports = new ShopConTroller();

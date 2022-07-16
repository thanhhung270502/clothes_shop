const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const shopRouter = require('./shop');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/shop', shopRouter);

    app.use('/', siteRouter);
}

module.exports = route;

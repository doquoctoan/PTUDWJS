var exoress = require('express');
var router = exoress.Router();
var productController = require('../controllers/products');
router.get('/search', function(req, res) {
    var query = req.query.query;
    productController.search(query, function(Products) {
        res.locals.ProductList = Products;
        res.locals.count = Products.length;
        res.locals.query = query;
        res.render('search');
    });
});
router.get('/', function(req, res) {
    res.redirect('/products');
});
module.exports = router;
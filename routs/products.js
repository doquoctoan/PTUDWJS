var express = require('express');
var router = express.Router();
// router.get("/",function(req,res){
// 	res.render('cart');
// 	});
var controller = require('../controllers/products');
router.get("/", (req, res) => {
    controller.getAll(function(Products) {
        res.locals.Products = Products;
        // console.log(products);
        res.render('index');
    });

});
/* router.get("/details",function(req,res){
	res.render('details');
	}); */
router.get("/:id", (req, res) => {
    var id = req.params.id;
    controller.getById(id, function(Product) {
        var page = parseInt(req.query.page);
        page = isNaN(page) ? 1 : page;
        var limit = 5;
        var pagination = {
            limit: limit,
            page: page,
            totalRows: Product.Comments.length
        };
        var offset = (page - 1) * limit;
        Product.Comments = Product.Comments.sort(function(a, b) {
            return b.updatedAt.getTime() - a.updatedAt.getTime();
        }).slice(offset, offset + limit);
        res.locals.pagination = pagination;
        res.locals.hasPagination = (pagination.totalRows / limit > 1);
        res.locals.Product = Product;
        res.render('details');
    });
});

module.exports = router;
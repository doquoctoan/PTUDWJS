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
        res.locals.Product = Product;
        res.render('details');
    });
});

module.exports = router;
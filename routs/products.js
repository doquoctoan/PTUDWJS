var express=require('express');
var router=express.Router();
// router.get("/",function(req,res){
// 	res.render('cart');
// 	});
var controller=require('../controllers/products');
router.get("/",function(req,res){
	controller.getAll(function(products){
		res.locals.products=products;
		console.log(products);
		});	
		res.render('index');	
	});
/* router.get("/details",function(req,res){
	res.render('details');
	}); */
router.get("/:id",function(req,res){
	res.render('details');
	});

module.exports=router;
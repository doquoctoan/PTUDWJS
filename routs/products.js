var express=require('express');
var router=express.Router();
router.get("/",function(req,res){
	res.render('cart');
	});
router.get("/checkout",function(req,res){
	res.render('checkout');
	});
router.get("/payment",function(req,res){
	res.render('payment');
	});
router.get("/confirm",function(req,res){
	res.render('confirm');
	});
router.get("/details",function(req,res){
	res.render('details');
	});

module.exports=router;
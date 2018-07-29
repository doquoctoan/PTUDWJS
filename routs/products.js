var express=require('express');
var router=express.Router();
// router.get("/",function(req,res){
// 	res.render('cart');
// 	});
router.get("/",function(req,res){
		res.render('index');
		});
router.get("/details",function(req,res){
	res.render('details');
	});
router.get("/:id",function(req,res){
	res.render('details');
	});

module.exports=router;
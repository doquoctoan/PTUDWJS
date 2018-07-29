var express=require('express');
var router=express.Router();
router.get("/register",function(req,res){
	res.render('register');
	});
router.get("/login",function(req,res){
	res.render('login');
	});
router.get("/order",function(req,res){
	res.render('orderhistory');
	});
router.get("/order/:id",function(req,res){
	res.render('orderdetails');
	});

module.exports=router;
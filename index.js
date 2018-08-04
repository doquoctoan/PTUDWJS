var express = require('express');
var app = express();

// Setting for app her
// Set Public Folder
app.use(express.static(__dirname + '/public'));
app.use('/css',express.static(__dirname+'/node_modules/bootstrap/dist/css'));//set duong dan css
// Use View Engine
var expressHbs = require('express-handlebars');
var hbs = expressHbs.create({
	extname			: 'hbs',
	defaultLayout	: 'layout', 
	layoutsDir		: __dirname + '/views/layouts/',
	partialsDir		: __dirname + '/views/partials/',
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
// Define your route here
// app.get("/",function(req,res){
// res.render('index');
// });
app.get("/",function(req,res){
	res.redirect('/products');
	 });
var userRouter=require('./routs/users');
app.use('/users',userRouter);

var productsRouter=require('./routs/products');
app.use('/products',productsRouter);

app.get("/products/orderdetails",function(req,res){
	res.render('orderdetails');
	});
var cartsRouter=require('./routs/carts');
app.use('/carts',cartsRouter);

// Create database
// var models = require('./models');
// app.get('/sync', function(req, res){
// 	models.sequelize.sync().then(function(){
// 		res.send('database sync completed!');
// 	});
// });
// Set Server Port & Start Server
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function(){
	console.log('Server is listening at port ' + app.get('port'));
});

// Error handler
//app.get('/test',function(req,res){
 //console.log(req.locals.message);
//});
// Handle 404 Not found
app.use(function(req, res){
	res.locals.message = 'File Not Found';
	res.status(404).render('error');
});

// Handle 500 Internal Server Error
app.use(function(err, req, res, next) {
	console.log(err);
	res.locals.message = 'Internal Server Error';
	res.status(500).render('error');
});
	
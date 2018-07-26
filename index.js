var express = require('express');
var app = express();

// Setting for app here
// Set Public Folder
app.use(express.static(__dirname + '/public'));

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
app.get("/",function(req,res){
res.render('index');
});
var userRouter=require('./routs/users');
app.use('/users',userRouter);

var productsRouter=require('./routs/products');
app.use('/cart',productsRouter);

app.get("/cart/orderdetails",function(req,res){
	res.render('orderdetails');
	});
// Set Server Port & Start Server
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function(){
	console.log('Server is listening at port ' + app.get('port'));
});
	
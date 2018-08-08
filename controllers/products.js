var controller = {};

var models = require('../models');
var Products = models.Product;

controller.getAll = function(callback){
    Products
    .findAll()
    .then(function(products){
        products.forEach(product => {
            product.price = parseFloat(product.price).toFixed(2);
        });
        callback(products);
    })
};

controller.getById = function(id, callback){
    Products
    .findOne({ 
        where: {id: id},
        include: [models.Comment]
    })
    .then(function(product){
        product.price = parseFloat(product.price).toFixed(2);
        callback(product);
    });
};

module.exports = controller;
var controller = {};

var models = require('../models');
var Products = models.Product;

controller.getAll = function(callback) {
    Products
        .findAll()
        .then(function(Products) {
            Products.forEach(Product => {
                Product.price = parseFloat(Product.price).toFixed(2);
            });
            callback(Products);
        })
};
controller.getById = function(id, callback) {
    Products
        .findOne({
            where: { id: id },
            include: [models.Comment]
        })
        .then(function(Product) {
            Product.price = parseFloat(Product.price).toFixed(2);
            callback(Product);
        });
};

module.exports = controller;
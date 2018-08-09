var controller = {};

var models = require('../models');
var Products = models.Product;

controller.getAll = function(callback) {
    Products
        .findAll()
        .then(function(Products) {
            callback(Products);
        });
};

module.exports = controller;
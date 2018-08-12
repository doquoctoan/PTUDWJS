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
//function search
controller.search = function(query, callback) {
    Products
        .findAll({
            where: {
                $or: [{
                        name: {
                            $like: `%${query}%`
                        }
                    },
                    {
                        summary: {
                            $like: `%${query}%`
                        }
                    },
                    {
                        description: {
                            $like: `%${query}%`
                        }
                    }
                ]
            }
        })
        .then(function(Products) {
            Products.forEach(function(Product) {
                Product.price = parseFloat(Product.price).toFixed(2);
            });
            callback(Products);
        });
};
module.exports = controller;
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    totalQuantity: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    paymentMethod: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.hasMany(models.OrderDetail);
    Order.belongsTo(models.User);
    Order.belongsTo(models.Address);
 
  };
  return Order;
};
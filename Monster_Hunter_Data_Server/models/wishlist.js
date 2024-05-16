'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Wishlist.init({
    OrderId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:{
          msg: "OrderId can't be empty"
        },
        notEmpty:{
          msg: "OrderId can't be empty"
        }
      }
    },
    price: DataTypes.STRING,
    status: DataTypes.STRING,
    paidDate: DataTypes.DATE,
    UserId: DataTypes.INTEGER,
    transactionToken: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Wishlist',
  });
  return Wishlist;
};
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
      allowNull: false,
      validate:{
        notNull:{
          msg:"OrderId is required"
        },
        notEmpty:{
          msg:"OrderId is required"
        }
      }
    },
    price: DataTypes.STRING,
    status: DataTypes.STRING,
    paidDate: DataTypes.DATE,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Wishlist',
  });
  return Wishlist;
};
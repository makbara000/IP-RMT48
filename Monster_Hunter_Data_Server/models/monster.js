'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Monster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Monster.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    species: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Monster',
  });
  return Monster;
};
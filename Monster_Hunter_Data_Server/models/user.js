'use strict';
const { hashing } = require('../helpers/hashingTime');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate:{
        notEmpty:{
          msg: "Email can't be empty"
        },
        notNull:{
          msg: "Email can't be empty"
        },
        isEmail:{
          msg: "Needs to be in email format"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          msg: "Password can't be empty"
        },
        notNull:{
          msg: "Password can't be empty"
        },
        len:{
          args: [5],
          msg: "Password at least 5 characters"
        }
      }
    }, 
    role:{
      type: DataTypes.STRING,
      defaultValue: "user"
    }, 
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user) =>{
    user.password = hashing(user.password)
  })
  return User;
};
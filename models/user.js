'use strict';
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
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate:{
        isAlpha: {
          args:true,
          msg:'Name solo debe tener letras'
        },
        notEmpty:{
          args:true,
          msg:'Name no debe quedar vacío'
        },
        notNull:{
          args:true,
          msg:'Name no existe'
        },
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty: {
          args: true,
          msg: "El campo email no debe de quedar vacío"
        },
        notNull: {
          args: true,
          msg: "El campo email no existe"
        },
        isEmail: {
          args: true,
          msg: "Debe contener un dominio"
        } 
      },
    }, 

    password:{
      type:DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate:{
        notEmpty: {
          args: true,
          msg: "El campo password no debe de quedar vacío"
        },
        notNull: {
          args: true,
          msg: "El campo password no existe"
        },
        len: {
          args: [8,15 ],
          msg: "El campo password debe tener mínimo 8 carácteres y máximo 15 carácteres"
        },
      }
    }
  },{
    sequelize,
    modelName: 'User',
    timestamps: false
     
  });
  return User;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
    title: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha:{
          args: true,
          msg: ' son letras'
        },
        notEmpty:{
          args: true,
          msg: ' no envie capos vacios'
        },
        notNull: {
          args: true,
          msg: ' no tiene el name'
        },
      }
    },
      
    description:{
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      
      validate: {
        isAlpha:{
          args: true,
          msg: 'solo son letras'
        },
        notEmpty:{
          args: true,
          msg: ' no envie capos vacios'
        },
        notNull: {
          args: true,
          msg: ' no tiene el name'
        },
      }
    
    } ,
    weeks:{
      type:DataTypes.INTEGER,
      validate: {
        isNumeric:{
          args: true,
          msg: 'Solo permite numeros'
        },
      }
    },

    enroll_cost:{
      type:DataTypes.REAL,
      validate: {
        isNumeric:{
          args: true,
          msg: 'Solo permite numeros'
        },
      }
    },
    
    minimum_skill:{
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty:{
          args: true,
          msg: ' no envie capos vacios'
        },
        notNull: {
          args: true,
          msg: ' no tiene nada'
        },
      }
    }, 
    bootcamp_id: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,validate: {
        isNumeric:{
          args: true,
          msg: 'Solo permite numeros'
        },
        notEmpty:{
          args: true,
          msg: ' no envie capos vacios'
        },
        notEmpty:{
          args: true,
          msg: ' no envie capos vacios'
        },
      }
    }, 
  }, {
    sequelize,
    modelName: 'Courses',
    timestamps: false
  });
  return Courses;
};

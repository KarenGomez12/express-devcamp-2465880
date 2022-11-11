'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bootcamp.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El nombre del bootcamp no debe estar vacío"
        },
        notNull: {
          args: true,
          msg: "Falta el nombre del bootcamp"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "La descripción no debe estar vacía"
        },
        notNull: {
          args: true,
          msg: "Falta la descripción del bootcamp"
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El teléfono no debe estar vacía"
        },
        notNull: {
          args: true,
          msg: "Falta el teléfono del bootcamp"
        },
        isNumeric: {
          args: true,
          msg: "El teléfono solo puede contener números"
        },
        len: {
          args: [10,10],
          msg: "El teléfono debe tener un tamaño de 10"
        }
      }
    },
    average_cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El costo no debe estar vacío"
        },
        notNull: {
          args: true,
          msg: "Falta el costo del bootcamp"
        },
        isNumeric: {
          args: true,
          msg: "El costo solo puede contener números"
        }
      }
    },
    average_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "La puntuación no debe estar vacía"
        },
        notNull: {
          args: true,
          msg: "Falta la puntuación del bootcamp"
        },
        isNumeric: {
          args: true,
          msg: "La puntuación solo puede contener números"
        },
        min: {
          args: 1,
          msg: "La puntuación debe ser mínimo 1"
        },
        max: {
          args: 10,
          msg: "La puntuación debe ser de un máximo hasta 10"
        }
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El user_id no debe estar vacío"
        },
        notNull: {
          args: true,
          msg: "Falta el user_id del bootcamp"
        },
        isNumeric: {
          args: true,
          msg: "El user_id solo puede contener números"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Bootcamp',
    timestamps: false
  });
  return Bootcamp;
};

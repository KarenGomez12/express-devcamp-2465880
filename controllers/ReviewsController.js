//objeto de conexión
const sequelize = require('../config/seq')
//DATATYPES
const {DataTypes, ValidationError } = require('sequelize')
//MODELO
const ReviewsModel = require('../models/reviews')

//CREAR OBJ USUARIO
const Reviews = ReviewsModel(sequelize, DataTypes)

//----------------------------- CREAR RUTAS (ENDPOINT, URI) PARA LOS Reviews -----------------------------//
exports.getAllReviews =async(req, res)=>{
    try {
        const reviews = await Reviews.findAll();
        res.status(200).json(
            {
                "succes"  : true,
                "data" : reviews,
                "message" : `Aquí se ven todos los Reviews`
            }
        )
    } catch (error) {
        res
        .status(500)
        .json({
            "success": false,
            "errors": "error de servidor"
        })
    }

}

//----------------------------- OBTENER RECUERSO POR ID -----------------------------//
exports.getSingleReviews = async(req, res)=>{
    try {
        const reviews = await Reviews.findByPk(req.params.id);
        //SI USUARIO NO EXISTE
        if (!reviews ) {
            res.status(422).json(
                {   
                    "succes"  : false,
                    "errores"    : [
                        "Usuario no existe"
                    ],
                }
            )     
        }
        else{
        res.status(200).json(
        {   
            "succes"  : true,
            "data"    : reviews,
            "message" : `Aquí se muestra un USUARIO cuyo id es ${req.params.id}`
        }
    )
        }
    } catch (error) {
        res
        .status(500)
        .json({
            "success": false,
            "errors": "error de servidor"
        })
    }
    
}

//----------------------------- POST: CREAR --------------------------//
exports.postReviews = async(req, res)=>{
    try {
        
        // Create a new Reviews
        const newReviews = await Reviews.create(req.body);
        res.status(201).json({
            "success" : true,
            "data"    : req.body,
            "message" : "aquí crearemos un USUARIO"
        })
    } catch (error) {
        //LLEVAR OBJETO DE LOS ERRORES
        if (error instanceof ValidationError ) {
            //VARIABLE QUE LLEVA MENSAJES DE ERROR
            const errores = error.errors.map((e)=> e.message )
            res
                .status(422)
                .json({
                    "success": false,
                    "errors": errores
                })
        }else{
            //errores de servidor
            res
                .status(500)
                .json({
                    "success": false,
                    "errors": "error de servidor"
                })
        }
    }
}

//----------------------------- PUT O PATCH PARA ACTUALIZAR -----------------------------//
exports.putReviews = async(req , res)=>{
    try {
        //CONSTULTAR DATOS ACTUALIZADOS
        const upReviews = await Reviews.findByPk(req.params.id)

        if (!upReviews) {
            //RESPUESTA DE ERROR PARA USUARIO NO ENCONTRADO
            res.status(422).json(
                {   
                    "succes"  : false,
                    "errores"    : [
                        "Usuario no existe"
                    ],
                }
            )    
        }else{
            //actualizar usuario por id
            await Reviews.update(req.body, {
                where: {
                id: req.params.id
                }
            });
            //seleccionar usuario actualizado
              //consultar datos actualizados
            const ReviewsAct = await Reviews.findByPk(req.params.id)
            //enviar response con usuario actualizado
            res.status(200).json({
                "success" : true,
                "data" :  ReviewsAct
            })
       }
    } catch (error) {
         
          //errores de servidor
          res
          .status(500)
          .json({
              "success": false,
              "errors": "error de servidor"
          })
    }
    
}

//-----------------------------DELETE PARA BORRAR UN USUARIO-----------------------------//
exports.deleteReviews = async(req,res)=>{

    try {

        const deleteReviews = await Reviews.findByPk(req.params.id)
        await Reviews.destroy({
            where: {
              id: req.params.id
            }
          })
    
        //CONSTULTAR DATOS ELIMINADO
       
        res.status(200).json(
            {   
                "succes" : true,
                "data"   : deleteReviews,
                "message": deleteReviews.name
            }
        )
    } catch (error) {
         //errores de servidor
          res
          .status(500)
          .json({
              "success": false,
              "errors": "error de servidor"
          })
    }
   
}
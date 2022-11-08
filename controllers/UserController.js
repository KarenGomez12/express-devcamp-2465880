//OBJETO DE CONEXCION
const sequelize = require('../config/seq')
//DataTypes
const {DataTypes, ValidationError}= require('sequelize')
//el model:
const UserModel=  require ('../models/user')
const user = require('../models/user')
//crear el obejto usuario
const User = UserModel(sequelize,DataTypes)


//get: obtener datos id
exports.listarUsers = async (req, res)=>{
    try {
        const user = await User.findAll(req.params.id);
        res.status(200).json(
        {
            "success":true,
            "data":user
        })
    } catch (error) {
        res
            .status(422)
            .json({
                "succes":false,
                "errors": "error de servidor"
            })
    }
    
}

//obtener recurso por id
exports.traerUserPorId= async (req, res)=>{
    try {
        const userId = await User.findByPk(req.params.id)
        //si usuario no existe
        if(!userId){
            res.status (422).json(
                {
                    "success":true,
                    "errors":[
                        "usuario no existe"
                    ]
                }
            )    
        }else{
            res.status (200).json(
                {
                    "success":true,
                    "data":userId,
                    "message": `Aquí muestra un user cuyo id es: ${req.params.id}`
                }
            )    
        }
    } catch (error) {
        res
                .status(422)
                .json({
                    "succes":false,
                    "errors": "error de servidor"
                })
    }
    
}

//POST:crear un nuevo recurso 
exports.crearUser=async(req , res)=>{
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({
                "succes": true,
                "data": newUser
            }) 
    } catch (error) {
        //cuando se cae el servidor
        if(error instanceof ValidationError){
            //poner los menajes de error e una variable 
        const errores = error.errors.map((e)=>e.message)
        //llevar errores a response
        res
            .status(422)
            .json({
                "succes":false,
                "errors": errores
            })
        }
        else{
            //errores de servidor
            res
                .status(422)
                .json({
                    "succes":false,
                    "errors": "error de servidor"
                })
        }
    }
}

//PUT -PATCH
exports.actualizarUser =async(req, res)=>{
    try {
        //consultar datos actualizados
    const updateUser= await User.findByPk(req.params.id)
    if(!upUser){
        //response de usuario no encontrado
        res.status (422).json(
            {
                "success":true,
                "errors":[
                    "usuario no existe"
                ]
            }
        )  
    }
    else{
        //actualizar usuario por id
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        //seleccionar usuaio actualizado
            //consultar datos actualizados
            const userAct= await User.findByPk(req.params.id)
            //enviar response con usuario actualizado
            res.status(200).json(
                {
                    "success":true,
                    "data": userAct
                }
            )
    }    
    } catch (error) {
        res
        .status(423)
        .json({
                "succes":false,
                "errors": "error de servidor"
            })
    }
    
}

//DELETE: Borrar un user 
exports.borrarUser = async(req,res)=>{
    //buscar al usuario por id
    const borrarUser=await User.findByPk(req.params.id)
    //borrar usuario por id 
    await User.destroy({
        where: {
            id:req.params.id
        }
    });
    
    //CONSTULTAR DATOS ELIMINADO
    res.status(200).json(
        {   
            "succes" : true,
            "data"   : borrarUser,
            "message": `Se va a borrar el USUARIO ${req.params.id}`
        }
    )
}
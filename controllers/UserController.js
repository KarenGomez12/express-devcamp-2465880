//OBJETO DE CONEXCION
const sequelize = require('../config/seq')
//DataTypes
const {DataTypes}= require('sequelize')
//el model:
const UserModel=  require ('../models/user')
const user = require('../models/user')
//crear el obejto usuario
const User = UserModel(sequelize,DataTypes)


//get: obtener datos id
exports.listarUsers = async (req, res)=>{
    const user = await User.findAll(req.params.id);
    res.status(200).json(
        {
            "success":true,
            "data":user
        }
    )
}

//obtener recurso por id
exports.traerUserPorId= async (req, res)=>{
    const userId = await User.findByPk(req.params.id)
    res.status (200).json(
        {
            "success":true,
            "data":userId,
            "message": `Aquí muestra un user cuyo id es: ${req.params.id}`
        }
    )
}

//POST:crear un nuevo recurso 
exports.crearUser=async(req , res)=>{
    const newUser = await User.create(req.body);
    res.status(201).json
    (
        {
            "succes": true,
            "data": newUser
        }
    )
}

//PUT -PATCH
exports.actualizarUser =async(req, res)=>{
    //actualizar usuario por id
    await User.update(req.body,{
        where:{
            id: req.params.id
        }
    });
    //consultar datos actualizados
    const updateUser= await User.findByPk(req.params.id)

    res.status(200).json(
        {
            "success":true,
            "data": updateUser
        }
    )
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
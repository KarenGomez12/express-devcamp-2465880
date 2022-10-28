//OBJETO DE CONEXCION
const sequelize = require('../config/seq')
//DataTypes
const {DataTypes}= require('sequelize')
//el model:
const UserModel=  require ('../models/user')
const user = require('../models/user')
//crear el obejto usuario
const User = UserModel(sequelize,DataTypes)


//get: obtener datos Read
exports.listarUsers = async (req, res)=>{
    const user = await User.findAll();
    
    res.status(200).json(
        {
            "success":true,
            "data":user
        }
    )
}

//obtener recurso por id
exports.traerUserPorId= (req, res)=>{
    const userId = User.findByPk(req.params.id)
    res.status (200).json(
        {
            "success": true,
            "data": userId
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
exports.borrarUser=(req , res)=>{
    res.status(200).json(
        {
            "message": `Aquí se va a eliminar el users ${req.params.id}`
        }
    )
}
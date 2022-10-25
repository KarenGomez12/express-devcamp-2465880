const sequelize = require('./seq')

//dependencia del modelo
const UserModel = require('../models/user')

//dependencia a DataTypes
const { DataTypes} = require('sequelize')

//crear modelo
const userModel =UserModel(sequelize,DataTypes)

//craer funcion asyncrona para conexcion
const connectDB = async() =>{
    try {
        await sequelize.authenticate()
        console.log('la conexcion establecida correctamente'.bgMagenta)
        //Seleccionar los users:
        const users = await userModel.findAll();
        console.log(users);

        //craer nuevos usuarios
        const Usera = await userModel.create({ name: "Viviana", email: "viviana@misena.edu.co", password:"555" });
        console.log("p", Usera.id);

    } catch (error) {
        console.log(error)
    }   
}
//ejecutar la conexcion
connectDB()
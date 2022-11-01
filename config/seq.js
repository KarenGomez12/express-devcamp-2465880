const Sequelize = require('sequelize')
const dotenv = require ('dotenv')

dotenv.config ({
    path:'./config_env/config.env'
})
//console.log(process.env.DB_NAME)

//definir objeto sequelize de conexion:
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:'localhost',
        dialect: process.env.DB_MOTOR,
        port:process.env.DB_PORT
    }
)
module.exports= sequelize
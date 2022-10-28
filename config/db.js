const sequelize = require('./seq')

//craer funcion asyncrona para conexcion
const connectDB = async() =>{
    try {
        await sequelize.authenticate()
        console.log('la conexcion establecida correctamente'.bgMagenta)
    } catch (error) {
        console.log(error)
    }   
}
//ejecutar la conexcion
module.exports= connectDB
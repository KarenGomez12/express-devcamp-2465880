const express = require('express')
const dotenv = require ('dotenv')
const colors = require ('colors')


//depedenias ru
const connectDB =require ('./config/db')

//dependencias a las rutas 
const bootcampRoutes = require ('./routes/BootcampRoutes')
const userRoutes = require ('./routes/UserRoutes')

//establecer el archivo de configuración
//con variables de entorno del proyecto 
dotenv.config({
    path:'./config_env/config.env'
})


//1 crear el objeto app
const app = express ()

//ejecutar la conexcion a db
connectDB()

app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/users',userRoutes)

//2 Crear uan tutra dre prueba
// app.get ('/', ( request, response)=>{
//     response.send ('Ruta funcional')
// })


//3 Ejecutar servidor de desarrollo de express
app.listen(process.env.PORT, ()=>{
    console.log (`Servidor iniciado en puerto: ${process.env.PORT}`.bgGreen.blue)
})
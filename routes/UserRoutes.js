const express = require('express')
const router = express.Router()

//Crear rutas (endpoint, uri) para los users
//establecer las rutas de user

//get: obtener datos Read
router.get('/', (req, res)=>{
    console.log("entro")
    res.status(200).json(
        {
            "message" : "Aquí se va a mostrar todos los bootcamps"
        }
    )
})

//obtener recurso por id
router.get('/:id', (req, res)=>{
    res.status (200).json(
        {
            "message" : `Aqí va a mostrarse el bootcamp cuyo id es : ${req.params.id}`
        }
    )
})

//POST:crear un nuevo recurso 
router.post('/', (req , res)=>{
    res.status(201).json(
        {
            "message" : "Aqí se va crear bootcamp"
        }
    )
})


//PUT -PATCH
router.put ('/:id', (req, res)=>{
    res.status(200).json(
        {
            "message": `Aquí se va actualizar el bootcamp ${req.params.id}`
        }
    )
})


//DELETE: Borrar un user 
router.delete('/:id' , (req , res)=>{
    res.status(200).json(
        {
            "message": `Aquí se va a eliminar el bootcamp ${req.params.id}`
        }
    )
})

module.exports = router 
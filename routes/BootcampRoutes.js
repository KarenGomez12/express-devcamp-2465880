const express = require('express')
const{
        listarBootcamps,
        crearBootcamps,
        traerBootcampsPorId,
        actualizarBootcamps,
        borrarBootcamps
    } = require ('../controllers/BootcampsController')
const router = express.Router()

//Crear rutas (endpoint, uri) para los users
//rutasusuario
router.route('/')
    .get(listarBootcamps)
    .post(crearBootcamps)

//establecer las rutas de user
router.route('/:id')
    .get(traerBootcampsPorId)
    .put(actualizarBootcamps)
    .delete(borrarBootcamps)

module.exports = router 
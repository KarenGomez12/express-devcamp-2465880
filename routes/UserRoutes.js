const express = require('express')
const{
        listarUsers,
        crearUser,
        traerUserPorId,
        actualizarUser,
        borrarUser
    } = require ('../controllers/UserController')
const router = express.Router()

//Crear rutas (endpoint, uri) para los users
//rutasusuario
router.route('/')
    .get(listarUsers)
    .post(crearUser)

//establecer las rutas de user
router.route('/:id')
    .get(traerUserPorId)
    .put(actualizarUser)
    .delete(borrarUser)

module.exports = router 
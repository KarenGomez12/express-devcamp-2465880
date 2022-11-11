const express = require('express')
const{
        listarCourses,
        crearCourses,
        traerCoursesPorId,
        actualizarCourses,
        borrarCourses
    } = require ('../controllers/CoursesController')
const router = express.Router()

//Crear rutas (endpoint, uri) para los users
//rutasusuario
router.route('/')
    .get(listarCourses)
    .post(crearCourses)

//establecer las rutas de user
router.route('/:id')
    .get(traerCoursesPorId)
    .put(actualizarCourses)
    .delete(borrarCourses)

module.exports = router 
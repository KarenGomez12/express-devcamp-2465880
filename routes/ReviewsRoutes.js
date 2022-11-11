const express = require('express')
const color = require('colors')
const { getAllReviews, 
        getSingleReviews,
        postReviews,
        putReviews,
        deleteReviews    
    } = require('../controllers/ReviewsController')
const router = express.Router()

//ESTABLECER RUTAS PARA LOS USUARIOS

router.route('/')
            .get(getAllReviews)
            .post(postReviews)
router.route('/:id')
            .get(getSingleReviews)
            .put(putReviews)
            .delete(deleteReviews)

module.exports = router
const sequelize = require('../config/seq')
const { DataTypes, ValidationError } = require ('sequelize')
const coursesModel = require('../models/courses')



//objeto usuario

const courses = coursesModel(sequelize,DataTypes)


//get: obtener datos Courses
exports.listarCourses = async (request, response)=>{
    try {
        const traercourses = await courses.findAll();
    response.status(200).json(
        {
           "succes" : true,
           "data" : traercourses
        }
    )
    } catch (error) {
        if( error instanceof ValidationError){
            //Llevar errores a response
          // mensajes de error
           const errores =error.errors.map((e)=> e.message) 
           response.status(422)
               .json({
                  "success": false,
                  "errors": errores
               })
       }else{
           // error de servidor
           response.status(500)
           .json({
              "success": false,
              "errors": "error de servidor"
           }) 
       }  
    }   
    }


 // obtner recursos po id
exports.traerCoursesPorId = async (request, response)=>{
   try {
    const coursesid= await courses.findByPk(request.params.id)
    
    if (!coursesid) {
        response.status(422).json(
            {
                "succes" : true,
               "errors" : [
                "usuario no existe"
               ]
            }
        )
    }
    else {response.status(200).json(
        {
            "succes" : true,
           "data" : coursesid
        }
    )}
   } catch (error) {
    if( error instanceof ValidationError){
        //Llevar errores a response
      // mensajes de error
       const errores =error.errors.map((e)=> e.message) 
       response.status(422)
           .json({
              "success": false,
              "errors": errores
           })
   }else{
       // error de servidor
       response.status(500)
       .json({
          "success": false,
          "errors": "error de servidor"
       }) 
   }  
   } 
}

// metodo post: crear un nuevo recurso
exports.crearCourses = async (request, response)=>{
    try {
        const newcoursess = await courses.create(request.body);
        response.status(201).json({
            "success" : true,
            "data" : newcoursess
        })
    } catch (error) {
if( error instanceof ValidationError){
     //Llevar errores a response
   // mensajes de error
    const errores =error.errors.map((e)=> e.message) 
    response.status(422)
        .json({
           "success": false,
           "errors": errores
        })
}else{
    // error de servidor
    response.status(500)
    .json({
       "success": false,
       "errors": "error de servidor"
    }) 
}
   
   
        
    }
   
}

//Put - Patch: actualizar
exports.actualizarCourses = async (request, response)=>{
  try {
    const upcourses = await courses.findByPk(request.params.id)
    if (!upcourses) {
        //Error
        response.status(422).json(
            {
                "succes" : true,
               "errors" : [
                "usuario no existe"
               ]
            }
        )
    } else {
        await courses.update(  request.body, { where: {
            id: request.params.id 
        } 
    });
    const coursesAct = await courses.findByPk(request.params.id)
    response.status(200).json(
        {
           "succes" : true,
           "data" :coursesAct
        })
    }
  } catch (error) {
    if( error instanceof ValidationError){
            //Llevar errores a response
          // mensajes de error
           const errores =error.errors.map((e)=> e.message) 
           response.status(422)
               .json({
                  "success": false,
                  "errors": errores
               })
       }else{
           // error de servidor
           response.status(500)
           .json({
              "success": false,
              "errors": "error de servidor"
           }) 
       } 
  }   
    //consutae datoas actualizados 


}

//Delete
exports.borrarCourses = async(req, res)=>{
    try {
        //buscar al usuario
        const deletec = await courses.findByPk(req.params.id)

        if (!deletec) {
            //usuario no encontrado
            res
                .status(422)
                .json({
                    "success": false,
                    "errors": [
                        "delete no existe"
                    ]
                })
        }else{
            //borrar usuario por id
            await courses.destroy({
                where: {
                id: req.params.id
                }
            });

            //bootcamp eliminado
            res.status(200).json(
                {
                    "success": true,
                    "data": deletec
                }
            )
        }   
    } catch (error) {
        res
            .status(500)
            .json({
                "success": false,
                "errors": "error de servidor"
            })
    }
   

    
}
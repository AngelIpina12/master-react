const User = require("../models/user");

const testUser = (req, res) => {
    return res.status(200).send({
        message: "Mensaje enviado desde: controllers/user.js"
    })
}

const register = (req, res) => {
    let params = req.body;
    if(!params.name || !params.nick || !params.email || !params.password){
        return res.status(400).send({
            status: "error",
            message: "Faltan datos por enviar"
        })
    }
    let user = new User(params);
    User.find({$or: [
        {nick: params.nick},
        {email: params.email}
    ]}).exec((err, user) => {
        if(err){
            return res.status(500).send({
                status: "error",
                message: "Error al registrar el usuario"
            })
        }
        if(user && user.length >= 1){
            return res.status(200).send({
                status: "error",
                message: "El usuario ya existe"
            })
        }
    })

    return res.status(200).json({
        status: "success",
        message: "Acción de registro de usuarios",
        user
    })
}

module.exports = {
    testUser,
    register
}
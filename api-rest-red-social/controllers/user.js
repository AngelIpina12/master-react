const User = require("../models/user");

const testUser = (req, res) => {
    return res.status(200).send({
        message: "Mensaje enviado desde: controllers/user.js"
    })
}

const register = (req, res) => {
    let params = req.body;
    return res.status(200).json({
        message: "Acción de registro de usuarios",
        params
    })
}

module.exports = {
    testUser,
    register
}
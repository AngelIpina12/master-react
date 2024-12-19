const Follow = require("../models/follow");
const User = require("../models/user");

const testFollow = (req, res) => {
    return res.status(200).send({
        message: "Mensaje enviado desde: controllers/follow.js"
    })
}

const save = async (req, res) => {
    return res.status(200).send({
        status: "success",
        message: "Método para seguir a un usuario",
        identity: req.user
    })
}

module.exports = {
    testFollow,
    save
}
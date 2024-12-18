const bcrypt = require("bcrypt");
const User = require("../models/user");

const testUser = (req, res) => {
    return res.status(200).send({
        message: "Mensaje enviado desde: controllers/user.js"
    })
}

const register = async (req, res) => {
    let params = req.body;
    if (!params.name || !params.nick || !params.email || !params.password) {
        return res.status(400).send({
            status: "error",
            message: "Faltan datos por enviar"
        });
    }

    try {
        const user = await User.find({
            $or: [
                { nick: params.nick.toLowerCase() },
                { email: params.email.toLowerCase() }
            ]
        });

        if (user && user.length >= 1) {
            return res.status(200).send({
                status: "error",
                message: "El usuario ya existe"
            });
        }

        let pwd = await bcrypt.hash(params.password, 10);
        params.password = pwd;
        let user_to_save = new User(params);
        try {
            let user_saved = await user_to_save.save();
            return res.status(200).send({
                status: "success",
                message: "Usuario registrado correctamente",
                user: user_saved
            });
        } catch (err) {
            return res.status(500).send({
                status: "error",
                message: "Error al registrar el usuario"
            });
        }
    } catch (err) {
        return res.status(500).send({
            status: "error",
            message: "Error al registrar el usuario"
        });
    }
};

module.exports = {
    testUser,
    register
}
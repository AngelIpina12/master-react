const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("../services/jwt");
const mongoosePagination = require("mongoose-pagination");

const testUser = (req, res) => {
    return res.status(200).send({
        message: "Mensaje enviado desde: controllers/user.js",
        user: req.user
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

const login = async (req, res) => {
    let params = req.body;
    if (!params.email || !params.password) {
        return res.status(400).send({
            status: "error",
            message: "Faltan datos por enviar"
        });
    }
    try {
        let user = await User.findOne({
            email: params.email
        })
        // .select({"password": 0});
        if (!user) {
            return res.status(400).send({
                status: "error",
                message: "Usuario no encontrado"
            });
        }
        const pwd = await bcrypt.compareSync(params.password, user.password);
        if (!pwd) {
            return res.status(400).send({
                status: "error",
                message: "Contraseña incorrecta"
            });
        }
        const token = jwt.createToken(user);
        return res.status(200).send({
            status: "success",
            message: "Usuario logueado correctamente",
            user: {
                id: user._id,
                name: user.name,
                nick: user.nick
            },
            token
        })
    } catch (err) {
        return res.status(500).send({
            status: "error",
            message: "Error al iniciar sesión"
        });
    }
}

const profile = async (req, res) => {
    let id = req.params.id;
    let user = await User.findById(id).select("-password -role");
    try {
        if (!user) {
            return res.status(400).send({
                status: "error",
                message: "Usuario no encontrado"
            });
        }
        return res.status(200).send({
            status: "success",
            user
        });
    } catch (err) {
        return res.status(500).send({
            status: "error",
            message: "Error al obtener el perfil del usuario"
        });
    }
}

const list = async (req, res) => {
    let page = 1;
    if (req.params.page) {
        page = req.params.page;
    }
    page = parseInt(page);
    let itemsPerPage = 5;

    try {
        let total = await User.countDocuments();
        let usersList = await User.find().sort('_id').paginate(page, itemsPerPage);

        if (!usersList) {
            return res.status(400).send({
                status: "error",
                message: "No hay usuarios para mostrar"
            });
        }
        return res.status(200).send({
            status: "success",
            message: "Ruta de listado de usuarios",
            page,
            total,
            itemsPerPage,
            users: usersList,
            pages: Math.ceil(total / itemsPerPage)
        });
    } catch (err) {
        return res.status(500).send({
            status: "error",
            message: "Error al obtener el listado de usuarios"
        });
    }
}

module.exports = {
    testUser,
    register,
    login,
    profile,
    list
}
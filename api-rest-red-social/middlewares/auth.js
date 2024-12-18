const jwt = require("jwt-simple");
const moment = require("moment");

const libjwt = require("../services/jwt");
const SECRET_KEY = libjwt.SECRET_KEY;

exports.auth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).send({
            status: "error",
            message: "La petición no tiene la cabecera de autenticación"
        });
    }
    const token = req.headers.authorization.replace(/['"]+/g, "");
    try {
        let payload = jwt.decode(token, SECRET_KEY);
        if (payload.exp <= moment().unix()) {
            return res.status(401).send({
                status: "error",
                message: "El token ha expirado"
            });
        }
        req.user = payload;
    } catch (err) {
        return res.status(403).send({
            status: "error",
            message: "Token inválido",
            error: err
        });
    }
    next();
}


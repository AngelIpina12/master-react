const jwt = require("jwt-simple");
const moment = require("moment");

const SECRET_KEY = "clave_super_secreta_123456";

const createToken = (user) => {
    const payload = {
        id: user._id,
        name: user.name,
        surname: user.surname,
        nick: user.nick,
        email: user.email,
        role: user.role,
        image: user.image,
        iat: moment().unix(),
        exp: moment().add(30, "days").unix()
    }
    return jwt.encode(payload, SECRET_KEY);
}

module.exports = {
    createToken,
    SECRET_KEY
}

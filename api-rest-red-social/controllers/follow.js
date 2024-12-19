const Follow = require("../models/follow");
const User = require("../models/user");

const testFollow = (req, res) => {
    return res.status(200).send({
        message: "Mensaje enviado desde: controllers/follow.js"
    })
}

module.exports = {
    testFollow
}
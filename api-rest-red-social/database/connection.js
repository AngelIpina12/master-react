const mongoose = require("mongoose");

const connection = async() => {
    try{
        await mongoose.connect("mongodb://localhost:27017/social_network")
        console.log("Conectado correctamente a BD: social_network")
    }catch(error){
        console.log(error)
        throw new Error("No se ha podido conectar a la base de datos")
    }
}

module.exports = connection

const connection = require("./database/connection");
const express = require("express");
const cors = require("cors");

console.log("API Node para red social arrancada!")
connection();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/ruta-prueba", (req, res) => {
    return res.status(200).json(
        {
            "id": 1,
            "name": "Angel",
            "web": "angelipina.com"
        }
    )
});
app.listen(port, () => {
    console.log("servidor de node corriendo en el puerto: ", port)
})
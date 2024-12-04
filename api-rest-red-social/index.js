const connection = require("./database/connection");
const express = require("express");
const cors = require("cors");

console.log("API Node para red social arrancada!")
connection();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const userRoutes = require("./routes/user");
const publicationRoutes = require("./routes/publication");
const followRoutes = require("./routes/follow");

app.use("/api/user", userRoutes);
app.use("/api/publication", publicationRoutes);
app.use("/api/follow", followRoutes);

//ruta de prueba
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
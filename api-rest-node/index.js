const connection = require("./database/connection");
const express = require("express");
const cors = require("cors");

console.log("Aplicación de NodeJS lista para usar");
connection();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const articleRoutes = require("./routes/article");

app.use("/api", articleRoutes);

app.get("/probando", (req, res) => {
  return res.status(200).json([{
        course: "Master en React",
        author: "Angel Ipiña",
        url: "https://master-en-react.com",
    },
    {
        course: "Master en React",
        author: "Angel Ipiña",
        url: "https://master-en-react.com",
    },
  ]);
});

app.get("/", (req, res) => {
    return res.status(200).send(`<h1>Hola mundo con NodeJS y Express</h1>`);
  });

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});


const validator = require("validator");
const Article = require("../models/Article");

const test = (req, res) => {
    return res.status(200).send({
        message: "Test de API REST con NodeJS y Express",
    });
};

const course = (req, res) => {
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
}

const create = (req, res) => {
    let params = req.body;
    try {
        let validate_title = !validator.isEmpty(params.title) &&
                            validator.isLength(params.title, { min: 5, max: undefined });
        let validate_content = !validator.isEmpty(params.content);

        if (!validate_title || !validate_content) {
            throw new Error("No se ha podido crear el artículo");
        }

        let article = new Article(params);
        article.save((error, articleStored) => {
            if (error || !articleStored){
                return res.status(400).json({
                    status: "error",
                    message: "Error al guardar el artículo",
                });
            }
            return res.status(200).json({
                status: "success",
                message: "Artículo creado correctamente",
                article: articleStored,
            });
        });
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se ha podido crear el artículo",
        });
    }
    
    return res.status(200).json({
        message: "Accion de guardar",
        params,
    });
}

module.exports = { test, course, create };


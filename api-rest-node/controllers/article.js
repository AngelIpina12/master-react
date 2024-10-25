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

const create = async (req, res) => {
    let params = req.body;
    try {
        let validate_title = !validator.isEmpty(params.title) &&
                            validator.isLength(params.title, { min: 5, max: undefined });
        let validate_content = !validator.isEmpty(params.content);

        if (!validate_title || !validate_content) {
            throw new Error("No se ha podido crear el artículo");
        }

        let article = new Article(params);
        const articleStored = await article.save();

        return res.status(200).json({
            status: "success",
            message: "Artículo creado correctamente",
            article: articleStored,
        });
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se ha podido crear el artículo",
        });
    }
}

const get = async (req, res) => {
    try {
        let query = Article.find({});
        
        if (req.params.last) {
            query = query.limit(2);
        }
        
        query = query.sort({ date: -1 });
        
        const articles = await query;

        if (!articles || articles.length === 0) {
            return res.status(404).json({
                status: "error",
                message: "No se han encontrado artículos",
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Artículos obtenidos correctamente",
            articles,
        });
    } catch (error) {
        return res.status(404).json({
            status: "error",
            message: "Error al obtener los artículos",
        });
    }
}

const one = async (req, res) => {
    let articleId = req.params.id;
    let article = await Article.findById(articleId);

    if (!article || article.length === 0) {
        return res.status(404).json({
            status: "error",
            message: "No se ha encontrado el artículo",
        });
    }   
    return res.status(200).json({
        status: "success",
        message: "Artículo obtenido correctamente",
        article,
    });
}

const remove = async (req, res) => {
    let articleId = req.params.id;
    let articleDeleted = await Article.findOneAndDelete({ _id: articleId });

    if (!articleDeleted) {
        return res.status(404).json({
            status: "error",
            message: "No se ha podido eliminar el artículo",
        });
    }
    return res.status(200).json({
        status: "success",
        message: "Artículo eliminado correctamente",
    });
}

module.exports = { test, course, create, get, one, remove };

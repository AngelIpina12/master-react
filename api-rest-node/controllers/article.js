const Article = require("../models/Article");
const fs = require("fs");
const path = require("path");
const { validateArticle } = require("../helpers/validate");

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
        validateArticle(params);
        const article = new Article(params);
        const savedArticle = await article.save();
        return res.status(201).json({
            status: "success",
            message: "Artículo creado correctamente",
            article: savedArticle
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

const update = async (req, res) => {
    let articleId = req.params.id;
    let params = req.body;
    try {
        validateArticle(params);
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "No se ha validado el artículo",
        });
    }
    let articleUpdated = await Article.findOneAndUpdate({ _id: articleId }, params, { new: true }); 

    if (!articleUpdated) {
        return res.status(404).json({
            status: "error",
            message: "No se ha podido editar el artículo",
        });
    }   
    return res.status(200).json({
        status: "success",
        message: "Artículo editado correctamente",
        article: articleUpdated,
    });
}

const upload = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            status: "error",
            message: "No se ha subido ninguna imagen"
        });
    }
    let file = req.file.originalname;
    let fileSplit = file.split(".");
    let extension = fileSplit[fileSplit.length - 1];
    if (extension != "png" && extension != "jpg" && 
        extension != "jpeg" && extension != "gif") {
        fs.unlink(req.file.path);
        return res.status(400).json({
            status: "error",
            message: "Extensión no válida"
        });
    }else{
        let articleId = req.params.id;
        let articleUpdated = await Article.findOneAndUpdate({ _id: articleId }, {image: req.file.filename}, { new: true }); 

        if (!articleUpdated) {
            return res.status(404).json({
                status: "error",
                message: "No se ha podido editar el artículo",
            });
        }   
        return res.status(200).json({
            status: "success",
            message: "Artículo editado correctamente",
            article: articleUpdated,
            file: req.file
        });
    }
};

const image = async (req, res) => {
    let file = req.params.file;
    let pathImage = "./images/articles/" + file;
    fs.stat(pathImage, (err, stats) => {
        if (err) {
            return res.status(404).json({
                status: "error",
                message: "No se ha encontrado la imagen"
            });
        }else{
            return res.sendFile(path.resolve(pathImage));
        }
    });
}

const search = async (req, res) => {
    let search = req.params.search;
    let query = Article.find({ title: new RegExp(search, "i") });
    query = query.sort({ date: -1 });
    let articles = await query;
    if (!articles || articles.length === 0) {
        return res.status(404).json({
            status: "error",
            message: "No se han encontrado artículos",
        });
    }   
    return res.status(200).json({
        status: "success",
        articles,
    });
}

module.exports = { test, course, create, get, one, remove, update, upload, image, search };

const Follow = require("../models/follow");
const followService = require("../services/followService")
const mongoosePaginate = require("mongoose-pagination")

const testFollow = (req, res) => {
    return res.status(200).send({
        message: "Mensaje enviado desde: controllers/follow.js"
    })
}

const save = async (req, res) => {
    const params = req.body;
    const identity = req.user;
    const userToFollow = new Follow({
        user: identity.id,
        followed: params.followed
    });
    try {
        let follow = await userToFollow.save();
        if (!follow) {
            return res.status(400).send({
                status: "error",
                message: "No se ha podido seguir al usuario"
            });
        }
        return res.status(200).send({
            status: "success",
            message: "Método para seguir a un usuario",
            identity,
            follow
        })
    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: "Ha ocurrido un error. Vuelva a intentarlo."
        });
    }
}

const unfollow = async (req, res) => {
    const userId = req.user.id;
    const followedId = req.params.id;
    try {
        let followToDelete = await Follow.findOneAndDelete({
            user: userId,
            followed: followedId
        });
        if (!followToDelete) {
            return res.status(400).send({
                status: "error",
                message: "No se ha podido dejar de seguir al usuario."
            });
        }
        return res.status(200).send({
            status: "success",
            message: "Se ha dejado de seguir al usuario correctamente.",
            identity: req.user,
            followToDelete
        })
    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: "Ha ocurrido un error. Vuelva a intentarlo."
        });
    }
}

const following = async(req, res) => {
    let userId = req.user.id
    if(req.params.id) userId = req.params.id

    let page = 1
    if(req.params.page) page = req.params.page

    const itemsPerPage = 5;
    try{
        const options = {
            page,
            limit: itemsPerPage,
            populate: { path: "user followed", select: "-password -role -__v" }
        };

        const result = await Follow.paginate({ user: userId }, options);
        let followUserIds = await followService.followUserIds(req.user.id);
        
        return res.status(200).send({
            status: "success",
            message: "Listado de usuarios que estoy siguiendo.",
            follows: result.docs,
            total: result.totalDocs,
            pages: result.totalPages,
            user_following: followUserIds.following,
            user_follow_me: followUserIds.followers
        });
    }catch{
        return res.status(400).send({
            status: "error",
            message: "Ha ocurrido un error. Vuelva a intentarlo."
        })
    }
}

const followers = (req, res) => {
    return res.status(200).send({
        status: "success",
        message: "Listado de usuarios que me siguen."
    })
}

module.exports = {
    testFollow,
    save,
    unfollow,
    following,
    followers
}
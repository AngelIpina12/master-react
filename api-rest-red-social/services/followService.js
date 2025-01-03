const Follow = require("../models/follow");

const followUserIds = async(identityUserId) => {
    let following = await Follow.find({"user": identityUserId})
                                .select({"followed": 1, "_id": 0})
    let followers = await Follow.find({"followed": identityUserId})
                                .select({"user": 1, "_id": 0})
    let followingClean = []
    following.forEach(follow => {
        followingClean.push(follow.followed);
    })
    let followersClean = []
    followers.forEach(follow => {
        followersClean.push(follow.user);
    })

    return{
        following: followingClean,
        followers: followersClean
    }
}

const followThisUser = async(identityUserId, profileUserId) => {
    let following = await Follow.findOne({ "user": identityUserId, "followed": profileUserId });
    let followers = await Follow.findOne({ "user": profileUserId, "followed": identityUserId });

    return{
        following,
        followers
    }
}

module.exports = {
    followUserIds,
    followThisUser
}
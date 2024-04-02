const postModal = require("../modal/postModal");

const createPost = async (req, res) => {
    try {
        console.log(req.body);
        const newPost = new postModal(req.body);
        await newPost.save();


        res.json({
            status: true,
            massage: "post created sucessfully!"
        })
    } catch (error) {
        res.json(error.stack)
    }

}


const getPosts = async (req, res) => {

    try {
        console.log(req);
        res.json({
            status: true,
            error
        })
    } catch (error) {
        res.json({
            status: false,
            error
        })
    }

}

const actionLikeDislikeComment = async (req, res) => {
    // console.log(req.params);
    try {
        let updateObject = {
            $push:
                { "like": req.body.userID },
            $pull:
                { "dislike": req.body.userID },
            $inc: {
                likesCount: 1
            }

        };

        if (req.params.action == "dislike") {
            updateObject = {
                $push:
                    { "dislike": req.body.userID },
                $pull:
                    { "like": req.body.userID },
                $dec: {
                    likesCount: 1
                }

            }
        }
        if (req.params.action == "comment") {
            updateObject = {
                $push:
                    { "comment": req.body },
                $inc: {
                    commentsCount: 1
                }

            }
        }


        const updatedProduct = await postModal.findByIdAndUpdate(req.params.postID,
            updateObject
        )

        res.json({
            sucess: true,
            massage: req.params.action + " post Sucessfully!"
        })

    } catch (error) {
        res.status(404).json({
            sucess: false,
            error: error.stack
        })
    }

}
const actionComment = async (req, res) => {
    // console.log(req.params);
    try {
       
       
        if (req.params.action == "comment") {
            updateObject = {
                $push:
                    { "comment": req.body.userID, "massage": req.body.comment },
                $inc: {
                    commentsCount: 1
                }

            }
        }


        const updatedProduct = await postModal.findByIdAndUpdate(req.params.postID,
            updateObject
        )

        res.json({
            sucess: true,
            massage: req.params.action + " post Sucessfully!"
        })

    } catch (error) {
        res.status(404).json({
            sucess: false,
            error: error.stack
        })
    }

}

module.exports = {
    createPost,
    getPosts,
    actionLikeDislikeComment,

}
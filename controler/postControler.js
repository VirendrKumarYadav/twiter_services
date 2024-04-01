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


module.exports = {
    createPost,
    getPosts,
}
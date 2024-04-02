const express=require("express");
const { createPost, getPosts, actionLikeDislikeComment } = require("../controler/postControler");
const router=express.Router();


router.post("/post/",createPost);
router.get("/post/",getPosts);
router.post("/post/:action/:postID",actionLikeDislikeComment);


module.exports=router;




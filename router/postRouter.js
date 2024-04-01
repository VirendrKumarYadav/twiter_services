const express=require("express");
const { createPost, getPosts } = require("../controler/postControler");
const router=express.Router();


router.post("/post/",createPost);
router.get("/post/",getPosts);



module.exports=router;




const express=require("express");
const router=express.Router();
const userControler=require("../controler/userControler")
const auth=require("../auth/auth")


router.post("/user/",userControler.userRgistration);
router.get("/user/",auth(["admin"]),userControler.getCurrentUser);
router.post("/login/",userControler.userLogin);
router.post("/profile/update/",userControler.updateProfile)


module.exports=router;
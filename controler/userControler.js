
const userModal = require("../modal/userModal");
const bcrypt = require("bcrypt")
const { response } = require("express");
const jwt = require("jsonwebtoken");

//----------------------------------------------------------------------------------//


const userRgistration = async (req, res) => {
    const pass = req.body.password
    const encrptrdPass = bcrypt

    try {
        const newUser = new userModal(req.body)
        await newUser.save();
        res.json({
            success: true,
            massage: "User Sucessfully Resistered, Let's go to the Login Page!"
        });
    } catch (error) {
        res.json({
            success: false,
            massage: error.message
        });
    }

};

const updateProfile = async (req, res) => {
    console.log(req.body);
    try {
        let userProfile = await userModal.findById(req.headers.id);
          await userProfile.updateOne(req.body);
         userProfile = await userModal.findById(req.headers.id);
       
         res.json({
            status: true,
            massage: "post updated sucessfully!",
            updated: userProfile.profile
        })

    } catch (error) {
        res.json(error.stack)
    }
}

const getCurrentUser = async (req, res) => {

    try {
        const users = await userModal.findOne();
        if (!users) {
            return res.json({
                success: false,
                message: "Invalid username or password",
            });
        }
        res.json({
            status: true,
            users
        })

    } catch (error) {
        res.json(error)
    }

}
const userLogin = async (req, res) => {
    try {
        const user = await userModal.findOne({ email: req.body.email });
        if (!user) {
            return res.json({
                success: false,
                message: "Invalid username or password",
            });
        }

        // this is for check the data encrptrd password

        // const isPasswordCorrect = bcrypt.compareSync(
        //     req.body.password,
        //     user.password
        // );

        if (req.body.password === user.password) {
            const expiryDateTime = Math.floor(new Date().getTime() / 1000) + 7200;
            const payload = {
                id: user._id,
                name: user.firstname,
                role: user.role,
                exp: expiryDateTime,
            };
            // to generate toaken add payload and jwt secrate key
            const barearToken = jwt.sign(payload, process.env.JWT_SECRET_KEY)
            res.json({
                success: true,
                massage: "Login Sucessfully!",
                token: barearToken
            })

        } else {
            res.json({
                success: false,
                massage: "Invalid Credencials!"
            })
        }
    } catch (error) {
        res.status(404).json({ massage: error.message });
    }
};
module.exports = {
    userRgistration,
    getCurrentUser,
    userLogin,
    updateProfile
}
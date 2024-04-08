
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./router/userRoute")
const postRoute = require("./router/postRouter")
const auth=require("./auth/auth")

if (process.env.SERVER == "LOCAL") {
    mongoose
        .connect(process.env.DB_LOCAL)
        .then(() => {
            console.log("LOCAL Database Connected Successully.");
        })
        .catch((err) => {
            console.log("Database Connected failed ", err);
        });
} else {
    mongoose.connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.3qnwaw3.mongodb.net/`
    )
        .then(() => {
            console.log("REMOTE Database Connected Successully.");
        })
        .catch((err) => {
            console.log("Database Connected Failed ", err);
        });
}
 
app.use(express.json());
app.use("/app/v1/",auth(["admin"]), userRoute);
app.use("/app/v1/",auth(["admin"]), postRoute);


app.listen(process.env.PORT, () => {
    console.log("listining at " + process.env.PORT + " Port");
})
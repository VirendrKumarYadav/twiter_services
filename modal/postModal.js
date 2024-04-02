const mongoose=require("mongoose")

const postSchema = new mongoose.Schema({
     
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    summery:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:false,
        default:"no image"
    },
    comment:{
        type:[],
        required:false,
        default:[]
    },
    like:{
        type:[mongoose.Schema.Types.ObjectId],
        required:false,
        default:[]
    },
    dislike:{
        type:[mongoose.Schema.Types.ObjectId],
        required:false,
        default:[]
    }
   
});


module.exports = mongoose.model("posts", postSchema);
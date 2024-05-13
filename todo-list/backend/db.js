
const mongoose = require("mongoose");

//My_mongoose_url is mongoose url to connect the db with my backend

// mongodb+srv://lucifer:lucifermrngstar@cluster0.5yvhitx.mongodb.net/
mongoose.connect("mongodb+srv://lucifer:lucifermrngstar@cluster0.5yvhitx.mongodb.net/")

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    isCompleted : Boolean
    // isCompleted : {
    //     type:Boolean,
    //     // default:false
    // }
});

const todo = mongoose.model("todo", todoSchema)
module.exports = {todo:todo};


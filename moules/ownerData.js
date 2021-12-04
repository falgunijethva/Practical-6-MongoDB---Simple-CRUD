const mongoose= require("mongoose");

const ownerSchema=mongoose.Schema({
    ownerid:String,
    name:String,
    email:String,
    contact:String
});

const ownerModel=mongoose.model("owner",ownerSchema,"owner");

module.exports=ownerModel;

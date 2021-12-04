const mongoose= require("mongoose");

const eventSchema= mongoose.Schema({
    eventid:String,
    name:String,
    date:String,
    amount:String,
    ownerid:String,
});

const eventModel= mongoose.model("event",eventSchema,"event");
module.exports=eventModel;
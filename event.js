//const { application } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const router= express.Router();
router.use(express.json());

const eventModel= require("./moules/eventData");


router.get("/",(req,res) => {
    res.json({data:["event Details"]});
});

//add event
router.post("/addevent",(req,res)=>{
const newevent= req.body;
eventModel.create(newevent);
return res.json({ data :"event insert successfully",msg:newevent});
});

//delete event 
router.delete("/deleteevent/:eid",async(req,res)=> {
    const eid = req.params.eid;
    const deleteowner = await eventModel.findOneAndDelete({eventid : eid});
     res.json({msg : " event succesffuly deleted! ..."});    
 });

 //display event
 router.get("/display",async function (req, res) {
    const dataevent = await eventModel.find();
    res.json({ data: dataevent });
});


//update event 
router.put("/update/:eid" , async(req,res) =>{
    const eventid=req.params.eid;
    const name = req.body.name;
    const date=req.body.date;
    const amount=req.body.amount;
    const ownerid = req.body.ownerid;

    const updateevent = await eventModel.findOneAndUpdate(
        {eventid:eventid},
        {name:name,
        date:date,
        amount:amount,
        ownerid:ownerid},
        {new:true}
    );
    res.json({data:"update data successfully .....",msg:updateevent});
});

module.exports=router;




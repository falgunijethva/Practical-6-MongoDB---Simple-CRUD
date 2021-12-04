//const { application } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const router= express.Router();
router.use(express.json());

const ownerModel= require("./moules/ownerData");


router.get("/",(req,res) => {
    res.json({data:["Owner Details"]});
});

//add owner
router.post("/addowner",(req,res)=>{
const newowner= req.body;
ownerModel.create(newowner);
return res.json({ data :"owner insert successfully",msg:newowner});
});

//delete owner 
router.delete("/deleteowner/:oid",async(req,res)=> {
    const oid = req.params.oid;
    const deleteowner = await ownerModel.findOneAndDelete({ownerid : oid});
     res.json({msg : " owner succesffuly deleted! ..."});    
 });

//display owner
router.get("/display",async (req, res) => {
        const dataOwner = await ownerModel.find();
        res.json({ data: dataOwner });
    });
 
//update owner
router.put("/update/:oid", async(req,res) =>{
    const ownerid = req.params.oid;
    const name = req.body.name;
    const email = req.body.email;
    const contact = req.body.contact;

    const updateowner = await ownerModel.findOneAndUpdate(
      {ownerid:ownerid},
      {name:name,
      email:email,
      contact:contact},
      {new:true}  
    );
    res.json({data:"update data successfully .....",msg:updateowner});
});

module.exports=router;




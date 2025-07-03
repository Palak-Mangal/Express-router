const express=require("express");
const router=express.Router();  //router object ko access krne k liye

//access router object 
// replace app object with router object
//route object also have all this method- get, post, delete, show

//Index route-users
router.get("/",(req,res)=>{
    res.send("get for users");
});

//show route-users
router.get("/:id",(req,res)=>{
    res.send("show for users");
});

//post route-users
router.post("/",(req,res)=>{
    res.send("post for users");
});

//delete route-users
router.delete("/:id",(req,res)=>{
    res.send("delete for users");
});
 //exports router object
 module.exports= router;

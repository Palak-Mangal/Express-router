const express=require("express");
const router=express.Router();  //router object ko access krne k liye

//access router object 
// replace app object with router object
//route object also have all this method- get, post, delete, show

//Index route-post
router.get("/",(req,res)=>{
    res.send("get for post");
});

//show route-post
router.get("/:id",(req,res)=>{
    res.send("show for post");
});

//post route-post
router.post("/",(req,res)=>{
    res.send("post for users");
});

//delete route-post
router.delete("/:id",(req,res)=>{
    res.send("delete for post");
});
 //exports router object
 module.exports= router;

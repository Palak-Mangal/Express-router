//when we have a lot of routes of same type
//then we used express router

const express=require("express");
const app=express();
//require user.js file
const user= require("./routes/user.js");
//require post.js file
const post= require("./routes/post.js");

//basic route create
app.get("/",(req,res)=>{
    res.send("hi i am root");
});


//express app find out the path which is start from "/user" in user file
//common path in all route - "/user"
app.use("/user",user);

//express app find out the path which is start from "/post" in user file
//common path in all route - "/user"
app.use("/post",post);

//if want to make any different path then create it in our server.js file
app.get("/admin",(req,res)=>{
    res.send("hello, i am admin");
})

//server start
app.listen(5000,() =>{
    console.log("server is listening to port 5000");
});

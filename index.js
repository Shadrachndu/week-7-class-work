const express = require('express');
const app = express();
const friendsList = require('./models/FriendsList');
const hostname = "127.0.0.1";
const port = 5000;

//to return all friend List
app.get("/", (req, res)=>{
    res.json(friendsList).status(200);  
});


//creating a server o listen localhost at port: 5000
app.listen(port, ()=>{
    console.log(`server started and listening to ${hostname}:${port}`)
   
})
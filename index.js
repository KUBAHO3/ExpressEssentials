import express, { json } from "express";
import data from "./data/mock.json" assert { type: "json" };

const app = express()

const PORT = 5000;
//using public folder in our app
app.use(express.static('public'))
//using the image folder
app.use('/images',express.static("images"))
//get
app.get("/",(req,res)=>{
    res.json(data)
})
//post
app.post("/create",(req,res)=>{
    res.send("This is the Post request at /create")
})
//put
app.put("/edit",(req,res)=>{
    res.send("This is the Put request at /edit")
})
//delete
app.delete("/delete",(req,res)=>{
    res.send("This is the Delete request at /delete")
})

app.listen(PORT,()=>{
    console.log(`Our server is running on port ${PORT}!`)
    console.log(data)
})
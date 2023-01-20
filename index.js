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
});
//get - download method
app.get("/download",(req,res)=>{
    res.download("images/road.jpg")
})
//get - redirect method
app.get("/redirect",(req,res)=>{
    res.redirect("https://www.linkedin.com/in/kubaho-linne-heaven-78ab37208/")
})
//get with next
app.get("/next",(req,res,next)=>{
    console.log("response will be sent in the next function")
    next()
},
(req,res)=>{
    res.send("Here is the second callback function.")
})
//get with routing Parameters
app.get("/class/:id",(req,res)=>{
    const studentId = Number(req.params.id);
    const student = data.filter((student)=>student.id === studentId)
    res.send(student);
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
    
})


//common response methods
    //.json(): send a JSON response
    //.send(): sends the http response
    //.downoad(): Transfers the file as an attachement
    //.redirect(): Redirects the user to the specified path
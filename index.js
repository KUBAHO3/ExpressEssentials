import express, { json } from "express";
import data from "./data/mock.json" assert { type: "json" };

const app = express()

const PORT = 5000;
//using public folder in our app
app.use(express.static('public'))
//using the image folder
app.use('/images',express.static("images"))
//using express.json and express.urlencoded
//app.use(express.json())  //for express.json
app.use(express.urlencoded({ extended: true }))
//get
app.get("/",(req,res)=>{
    res.json(data)
});
//post - express.json and express.urlencoded
app.post("/item", (req, res)=>{
    console.log(req.body)
    res.send(req.body)
})
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
    const studentId = Number(req.params.id);                            //\
    const student = data.filter((student)=>student.id === studentId)   //\/\Middlewares
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
//Chain routing
app
  .route("/class")
  .get((req,res)=>{
     res.send("retrieving the class route")
  })
  .post((req,res)=>{
     res.send("creating on class route")
  })
  .put((req,res)=>{
     res.send("Updating the class route")
  })
  .delete((req,res)=>{
     res.send("deleting at class route")
  })

app.listen(PORT,()=>{
    console.log(`Our server is running on port ${PORT}!`)
    
})


//common response methods
    //.json(): send a JSON response
    //.send(): sends the http response
    //.downoad(): Transfers the file as an attachement
    //.redirect(): Redirects the user to the specified path
    //And more others at:
        //https://www.geeksforgeeks.org/express-js-response-complete-reference/

//Built-In Middleware Functions
    //express.static: serves static assets
    //express.json: Parses incoming requests with JSON payloads
    //express.urlencoded: Parses incoming requests with URL-encoded payloads

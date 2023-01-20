import express from "express";
import data from "./data/mock.json" assert { type: "json" };

const app = express()

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`Our server is running on port ${PORT}!`)
    console.log(data)
})
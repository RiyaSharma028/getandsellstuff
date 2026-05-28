

import connectiondb from "./DB/db.js"
import dotenv from "dotenv"
dotenv.config({
    path:"./.env"
})
connectiondb()























/*
import express from "express"
const app = express();

;(async ()=>{
     try{
        let connection = await mongoose.connect(`${process.env.connection_string}/${db_name}`)
        app.on("error" , (err)=>{
            console.error("MongoDB connection error:", err);
        });
        throw error
        app.listen(process.env.port || 3000 , ()=>{
            console.log("Connected to MongoDB and server is running on port " + (process.env.port || 3000));
        })
     }catch(error){
       console.log("error" , error)
       throw error;
     }
})


export default connectDb;*/
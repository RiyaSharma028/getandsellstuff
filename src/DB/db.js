import mongoose from "mongoose"
import {db_name} from "../constant.js"

const connectiondb = async ()=>{
    try{
       const connect = await mongoose.connect(`${process.env.connection_string}/${db_name}`)
       console.log(`\n Mongodb is hosted at : ${connect.connection.host}:${connect.connection.port}`)
    }catch(error){
       console.error("Error connecting to MongoDB:", error);
       process.exit(1);
    }
}

export default connectiondb;
    

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import dotenv from 'dotenv'
import connectDB from "./db/db.js";
import app  from './app.js'; 

dotenv.config()

connectDB()
.then(() => {
    const PORT = process.env.PORT || 8000;
    // listen for event error and print the message
    app.on("Error" , (error) => {
        console.log(`Error:` , error);
        throw error;
    })
    // On succesfull connection
    app.listen( PORT, () => {
        console.log(`Server is running at port: ${PORT}`);
    })
})
.catch((error) => {
    console.log("Mongo Db connection failed!!!", error);
});





























/*
//Another approach
import express  from "express";
const app = express();
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error" , (error) => {
            console.log('Application not able to connect with express')
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port: ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
})();
*/
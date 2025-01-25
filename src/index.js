// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import dotenv from 'dotenv'
import connectDB from "./db/db.js";

dotenv.config()

connectDB();





























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
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {

    const DB_URL= process.env.MONGODB_URI

    try {
        const connectionInstance = await mongoose.connect(`${DB_URL}/${DB_NAME}`);
        console.log(`MongoDb connected !!!! and the DB host is ${connectionInstance.connection.host}`);

    } catch (error) {
        console.error("Error: ", error);
        process.exit(1)
    }
}

export default connectDB
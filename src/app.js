import express  from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// configuration for forms or data from body
app.use(express.json({limit: "16kb"}))
// URL data configurations
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))
// configuration for files eg: pdf, images etc
app.use(express.static("public"))

// cookies configuration
// cookies CRUD operations for secure access
app.use(cookieParser())

export { app }
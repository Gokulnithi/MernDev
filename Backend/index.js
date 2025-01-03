    import mongoose from "mongoose";
    import express from "express";
    import dotenv from 'dotenv';
    import bodyParser from "body-parser";
    import route123 from "./Router/userRoute.js";
    const app = express()

    app.use(bodyParser.json())
    app.use('/api/user',route123);
    dotenv.config()
    const PORT = process.env.PORT;
    const URL = process.env.MONGO_URL;
    mongoose.connect(URL).then(()=>{
        console.log("Database connected");
        app.listen(PORT,()=>{
            console.log("Server Running on "+PORT);
        })
    });
    
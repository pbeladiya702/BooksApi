const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');

//connect to mongodb
mongoose.connect("mongodb+srv://Parth:12345@cluster0.mlh3y.mongodb.net/Student?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        const app = express();
        app.use("/api",route);
        app.listen(process.env.PORT || 3000,()=>{
            console.log("Server Started..!!");
        });
    }
);
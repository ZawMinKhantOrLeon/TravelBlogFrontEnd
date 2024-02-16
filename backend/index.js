const express = require("express");
const cors= require("cors");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/clientmessages");

app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });



const messageRoute= require("./routes/messageRoutes");

app.use("/message",messageRoute);

app.listen(3000,console.log("server is running on port : 3000"));



const express = require("express");
const app = express();

const dotenv = require('dotenv');
dotenv.config();

var textapi = process.env.API_KEY;

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("dist"));

const port = 8000;

const server = app.listen(port, function(){
    console.log("server is runnig on port 8000");
});

app.get("/", function(req, res){
    res.sendFile("dist/index.html")
})

app.get("/test", function(req, res) {
    res.json(textapi);
})

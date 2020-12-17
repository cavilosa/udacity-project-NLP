const express = require("express");
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("dist"));

const port = 8080;

app.get("/", function(req, res){
    res.sendFile("dist/index.html")
});

const server = app.listen(port, function(){
    console.log("server is runnig on port 8080");
});

const article = "";

app.post("/text", postText);

function postText(req, res) {
    const text = req.body;
    article = text;
}

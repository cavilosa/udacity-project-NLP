const express = require("express");
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require("body-parser");
const cors = require("cors");

app.options('*', cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use(cors());

app.use(express.static("dist"));
const port = 8081;

app.get("/", function(req, res){
    res.sendFile("dist/index.html")
});

const server = app.listen(port, function(){
    console.log("server is runnig on port 8081");
});

var textapi = process.env.API_KEY;

const projectData = {};

app.post("/text", postText);

async function postText(req, res) {
    const text = req.body;
    console.log(text);
    //const response = await fetch (`https://api.meaningcloud.com/sentiment-2.1?key=${textapi}&of=json&txt=${text}&lang=en`);
    //console.log("server side", response);
    //const newData = {
    //    irony: data.irony,
    //    subjectivity: data.subjectivity,
    //    agreement: data.agreement,
    //}
    //projectData = newData;
}

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

var textapi = process.env.API_KEY;
console.log("apikey", textapi);


app.post("/text", postText);

async function postText(req, res) {
    const text = req.body;
    const response = await fetch (`https://api.meaningcloud.com/sentiment-2.1?key=${textapi}&of=json&txt=${text}&lang=en`);
    console.log("server side", data);
    const projectData = {
        irony: data.irony,
        subjectivity: data.subjectivity,
        agreement: data.agreement,
    }
    res.send(projectData);
}

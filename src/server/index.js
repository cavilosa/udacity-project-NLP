const express = require("express");
const app = express();

const fetch = require('node-fetch');

const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use(express.static("dist"));
const port = 8081;

app.get("/", function(req, res){
    res.sendFile("dist/index.html")
});

const server = app.listen(port, function(){
    console.log("server is runnig on port 8081");
});

let textapi = process.env.API_KEY;


let text =""; // A sting to fill in with the user input info

app.post("/text", postText);

async function postText(req, res) {
    console.log("text received")
    const input = req.body; // User input from client side
    return text = input; // Assign new value to global variable
}


app.get("/data", updateUI);

async function updateUI (req, res) {
    // API url
    const response = await fetch (`https://api.meaningcloud.com/sentiment-2.1?key=${textapi}&of=json&txt=${text}&lang=en`)
        if (response.status != 200) {
            window.alert("MeaningCLoud response is not going well");
        }
    const data = await response.json(); // API call response with sentimental analysis
    console.log(typeof data)// API call response with sentimental analysis
    res.send(data); // Sending received data to client side
}

module.exports = server;

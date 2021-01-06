const express = require("express");
const app = express();

const fetch = require('node-fetch');

const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use(express.static("dist"));
//const port = "https://www.korzhyk.ca";

app.get("/", function(req, res){
    res.sendFile("dist/index.html")
});
/*
const server = app.listen(port, function(){
    console.log("server is runnig on korzhyk.ca");
});
*/
let textapi = process.env.API_KEY;


let text =""; // A sting to fill in with the user input info

app.post("/text", postText);

async function postText(req, res) {
    console.log("text received")
    const input = req.body.input;
    console.log(input)
    return text = input;
    /*
    const input = req.body; // User input from client side
    console.log(input)
    return text = input; */// Assign new value to global variable
}


app.get("/data", updateUI);

async function updateUI (req, res) {
    // API url
    console.log(text)
    const response = await fetch (`https://api.meaningcloud.com/sentiment-2.1?key=${textapi}&lang=en&txt=plain&url=${text}&model=general`)
        if (response.status != 200) {
            window.alert("MeaningCLoud response is not going well");
        }
    const data = await response.json(); // API call response with sentimental analysis
    console.log(typeof data, data)// API call response with sentimental analysis
    res.send(data); // Sending received data to client side
}

module.exports = server;

const express = require("express");
const app = express();

const fetch = require('node-fetch');

const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require("body-parser");
const cors = require("cors");

//app.options('*', cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("dist"));
const port = 8081;

app.get("/", function(req, res){
    res.sendFile("dist/index.html")
});

const server = app.listen(port, function(){
    console.log("server is runnig on port 8081");
});

let textapi = process.env.API_KEY;

app.post("/text", postText);

async function postText(req, res) {
    projectData = [];
    const text = req.body;

    const response = await fetch (`https://api.meaningcloud.com/sentiment-2.1?key=${textapi}&of=json&txt=${text}&lang=en`)
        if (response.status != 200) {
            window.alert("MEaningCLoud response is not going well");
        }
    const data = await response.json()
    .then((data)=>{
        console.log("doint newdata")
        const newData = {
           irony: data.irony,
           subjectivity: data.subjectivity,
           agreement: data.agreement,
        }
        projectData = newData;
        console.log("project data", projectData);
    })
    app.get("/data", async function updateUI (req, res) {
    console.log("data is running from server")
    res.send(projectData)
     })


}
/*
async function updateUI (req, res) {
    console.log("data is running from server")
    res.send(projectData)
}*/

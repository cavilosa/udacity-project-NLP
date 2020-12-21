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

let projectData = [];


app.post("/text", postText);

async function postText(req, res) {
    const text = req.body;

    const response = await fetch (`https://api.meaningcloud.com/sentiment-2.1?key=${textapi}&of=json&txt=${text}&lang=en`)
        if (response.status != 200) {
            window.alert("MeaningCLoud response is not going well");
        }
    const data = await response.json()
    console.log("data", data)

    .then( (data) => {
        const newData = {
           irony: data.irony,
           subjectivity: data.subjectivity,
           agreement: data.agreement,
        }
        return projectData.push(newData);
    })

    .then ( (projectData) => {
        console.log(projectData)
        res.send(projectData);

    })
}
/*app.get("/data", updateUI);

function updateUI (req, res) {
    console.log("project data", projectData)
    res.send(projectData)
}*/

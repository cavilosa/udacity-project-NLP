const express = require("express");
const app = express();

const dotenv = require('dotenv');
dotenv.config();

//const textapi = process.env.API_KEY;

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("dist"));

app.get("/", function(req, res){
    res.sendFile("dist/index.html")
});

const port = 8081;

const server = app.listen(port, function(){
    console.log("server is runnig on port 8081");
});


app.get("/key", sendApiKey);

function sendApiKey(req, res) {
    const textapi = process.env.API_KEY;
    res.send(textapi);
}

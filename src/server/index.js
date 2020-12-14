const express = require("express");
const app = express();

const dotenv = require('dotenv');
dotenv.config();

var textapi = process.env.API_KEY;

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = 8000;

app.use(cors());

app.use(express.static("dist"));

const data = ["The data from server side code"];

const server = app.listen(port, function(){
    console.log("seerver is runnig on port 8000");
    //console.log(textapi);
});

app.get("/test", function(req, res) {
    res.json(textapi);
})

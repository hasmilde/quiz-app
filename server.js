var cfenv = require ('cfenv')
var express = require("express")
var app = express()
var request = require("request")

app.post("/blockchain/email",function(req,res){
    var options= {url: "http://localhost:2016/register",
    json: true,
    body: req.body,
    method: "POST"}
    request(options, function(err, req, body){
        res.sendStatus(200)
    })
});

app.post("/blockchain/answer",function(req,res){
    var options= {url: "http://localhost:2016/answer",
    json: true,
    body: req.body,
    method: "POST"}
    request(options, function(err, req, body){
        res.sendStatus(200)
    })
});


app.use(express.static("./www"))

var appEnv = cfenv.getAppEnv()
app.listen(appEnv.port, '0.0.0.0', function(){
    console.log(appEnv.url)
})
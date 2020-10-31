var express = require("express");
var app = express();
var PORT  = process.env.PORT || 3033

app.get("/home",function(req, res){
    res.send("Ok");
});

app.use(express.static(__dirname + "/public"))

app.listen(PORT, function() {
    console.log("express server " + PORT + " çalışıyor ")
})

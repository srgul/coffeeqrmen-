var express = require("express");
var app = express();
var PORT  = process.env.PORT || 3033

app.get("/anasayfa",function(req, res){
    res.send("hakkimda");
});

app.use(express.static(__dirname + "/public"))

app.listen(PORT, function() {
    console.log("express server " + PORT + " çalışıyor ")
})

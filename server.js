// express is a node module for building HTTP servers
var express = require('express');
var app = express();

// tell express to t=look in the "public" directory for any files, first!
app.use(express.static("public"));

// the default route of / and what to do
app.get("/", function(req, res) {
    res.send("workout generator");
});

app.listen(80)
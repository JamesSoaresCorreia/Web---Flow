const express = require("express");
// const bodyParser = require("body=parser");
const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');


app.get("/", function(req, res){
    res.render("pages/index");
});
app.listen(3000, function(){
    console.log("Server started at 3000");
});

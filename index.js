var express = require("express")
var app = express()

app.set("view engine", "ejs")
app.set("views", "./views")
app.listen(process.env.PORT || 8080)
app.get("/", function (req, res) {
    res.render("home")
    console.log("home page started")
})
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/laptopapp");
const contactSchema = new mongoose.Schema({
username: String,
email: String,
});
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));
app.get("/", function (req, res) {
res.sendFile(__dirname + "/loginmongo.html");
});
app.post("/", function (req, res) {
var Name = req.body.username;
var Email = req.body.email;
const Contact = mongoose.model("Contact", contactSchema);
const contact = new Contact({
username: Name,
email: Email,
});
contact.save();
console.log("success fully saved");
});
app.listen(3000);
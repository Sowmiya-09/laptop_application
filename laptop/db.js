const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/laptopapp");
const contactSchema = new mongoose.Schema({
name: String,
email: String,
address: String,
dob: String,
mob: String,
password: String,
});
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));
app.get("/", function (req, res) {
res.sendFile(__dirname + "/reg1.html");
});
app.post("/", function (req, res) {
var Name = req.body.name;
var Email = req.body.email;
var Address = req.body.address;
var Dob = req.body.dob;
var Mobileno = req.body.mob;
var Password = req.body.password;
const Contact = mongoose.model("Contact", contactSchema);
const contact = new Contact({
name: Name,
email: Email,
address: Address,
dob: Dob,
mob: Mobileno,
password: Password,
});
contact.save();
console.log("success fully saved");
});
app.listen(3000);
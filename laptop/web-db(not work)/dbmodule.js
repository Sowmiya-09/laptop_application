
var databaseUrl = "mongodb://127.0.0.1:27017/mydb";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);
//var collections = db.collection("users");
console.log("Connected");

exports.authenticateUser = function(username, email, response) 
{
    console.log(username);
    console.log(email);
    db.users.find({ "username": username, "email": email },
        function(err, op) {
            
            if (err || !op) {
                response.write("..Not authorized user" || err);
                response.end();
            } else if (op.length == 0) {
                response.write("Not authorized user");
                response.end();
            } else {
                response.write("Authorized user");
                response.end();
            }

        });
}
exports.saveUser = function(username, email, response) {
console.log('Saving user to mongo');
db.users.insert({ "username": username, "email": email },
function(err, saved) 
{
    if (err || !saved)
        console.log(err);
    else
        response.write("User Saved");
        response.end();
         });
}
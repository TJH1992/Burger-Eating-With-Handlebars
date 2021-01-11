var express = require("express");
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse request body as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_Controller.js");

app.use('/', routes);

app.listen(PORT, function() {
  console.log("App now listening on PORT " + PORT);
});
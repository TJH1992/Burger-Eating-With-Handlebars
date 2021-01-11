var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/burgers/insertOne", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function() {
      res.redirect('/');
    });
  });

  router.put("/burgers/updateOne/:id", function(req, res){
      var condition = req.params.id;

      console.log("condition: ", condition);
      burger.updateOne(condition, function(result){
        res.sendStatus(200);
      });
  });


// Export routes for server.js to use.
module.exports = router;


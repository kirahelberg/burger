const express = require("express");
const burgers = require("../models/burger");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers", function(req, res) {
  burgers.insertOne(
    ["burger_name", "devoured"],
    [req.body.buger_name, req.body.devoured],
    function(result) {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/burgers/:id", function(req, res) {
  var condition = `id = ${req.params.id};`;

  console.log("condition", condition);

  burgers.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      res.json(result);
    }
  );
});

// Export routes for server.js to use.
module.exports = router;

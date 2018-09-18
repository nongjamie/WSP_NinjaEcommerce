const express = require("express");
const path = require("path");

// Init app
const app = express();

// Public folder
app.use(express.static('public'))

// Load view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Home route
// app.get("/", function(req, res) {
//   res.render("index", {
//     title: "Ninja Home"
//   });
// });
app.get("/", function(req, res) {
  res.render("promotion", {
    title: "Ninja Home"
  });
});

// Add Route
app.get("/articels/add", function(req, res) {
  res.render("add_article", {
    title: "Add articles"
  });
});

// Start server
app.listen(3000, function() {
  console.log("server started on port 3000...");
});

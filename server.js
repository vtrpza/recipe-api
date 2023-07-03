const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");

// Enable CORS
app.use(cors());

// Route to fetch recipes data
app.get("/api/recipes", (req, res) => {
  fs.readFile("recipes.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    try {
      const recipes = JSON.parse(data);
      res.json(recipes);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });
});

// Start the server
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

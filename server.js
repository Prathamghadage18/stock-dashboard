const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
const cors = require("cors");

const app = express();
app.use(cors());

let indexData = [];

// Read the CSV file and store data
fs.createReadStream("dump.csv")
  .pipe(csv())
  .on("data", (row) => {
    indexData.push(row);
  })
  .on("end", () => {
    console.log("CSV file processed");
    console.log("Total rows:", indexData.length);
  });

// API endpoint to serve index data
app.get("/indexes", (req, res) => res.json(indexData));

// Use port 5000 or the environment port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

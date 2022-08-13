'use strict';

// TODO: Write the homework code in this file
const PORT = 3000;
const express = require("express");
const app = express();

app.post("/todos", (req, res) => {
  res.send("Creates a new to-do")
});

app.get("/todos", (req, res) => {
  res.send("Reads and lists all to-dos")
});

app.put("/todos/:id", (req, res) => {
  res.send("Updates the description of a to-do with ID")
});

app.delete("/todos/:id", (req, res) => {
  res.send("Deletes a to-do with ID")
})

app.listen(PORT, error => {
  if (error)
    return console.error(error);

  console.log(`Server started on http://localhost:${PORT}`);
});
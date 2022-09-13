const express = require("express");
const { getDatabase } = require("./database/utils");
const { initializeWilders } = require("./models/Wilder/manager");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello world from Express!");
});

const PORT = 4000;

async function start() {
  await initializeWilders();
  await getDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 👍`);
  });
}

start();

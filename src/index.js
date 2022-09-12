const express = require("express");
const typeorm = require("typeorm");

const app = express();

const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "wildersdb.sqlite",
  synchronize: true,
});

app.get("/", function (req, res) {
  res.send("Hello world from Express!");
});

const PORT = 4000;

async function start() {
  await dataSource.initialize();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 👍`);
  });
}

start();

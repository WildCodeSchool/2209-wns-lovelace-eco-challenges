const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello world from Express!");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 👍`);
});

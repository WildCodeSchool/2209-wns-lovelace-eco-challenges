import express from "express";

import * as wildersControllers from "./controllers/wilders";
import { getDatabase } from "./database/utils";
import { initializeSchools } from "./models/School/manager";
import { initializeSkills } from "./models/Skill/manager";
import { initializeWilders } from "./models/Wilder/manager";

const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello world from Express!");
});

const WILDERS_PATH = "/wilders";
app.get(WILDERS_PATH, wildersControllers.get);
app.post(WILDERS_PATH, wildersControllers.post);
app.put(`${WILDERS_PATH}/:id`, wildersControllers.put);
app.delete(`${WILDERS_PATH}/:id`, wildersControllers.del);
app.post(`${WILDERS_PATH}/:id/skills`, wildersControllers.addSkill);

const PORT = 4000;

async function start() {
  await initializeSkills();
  await initializeSchools();
  await initializeWilders();
  await getDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 👍`);
  });
}

start();

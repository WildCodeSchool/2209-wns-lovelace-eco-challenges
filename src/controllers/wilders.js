const { getWilders, createWilder } = require("../models/Wilder/manager");

const get = async (req, res) => {
  const wilders = await getWilders();
  res.json(wilders);
};

const post = async (req, res) => {
  const { firstName, lastName } = req.body;
  if (!firstName || !lastName) {
    res.status(400).json({ error: "First name and last name are mandatory." });
  } else {
    const newWilder = await createWilder(firstName, lastName);
    res.status(201).json(newWilder);
  }
};

module.exports = {
  get,
  post,
};

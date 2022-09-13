const { getWilders, createWilder } = require("../models/Wilder/manager");

const get = async (req, res) => {
  const wilders = await getWilders();
  res.json(wilders);
};

const post = async (req, res) => {
  const { firstName, lastName } = req.body;
  const newWilder = await createWilder(firstName, lastName);
  res.json(newWilder);
};

module.exports = {
  get,
  post,
};

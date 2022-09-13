const {
  getWilders,
  createWilder,
  updateWilder,
} = require("../models/Wilder/manager");

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

const put = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;

  if (!id || !firstName || !lastName) {
    res
      .status(400)
      .json({ error: "ID, first name and last name are mandatory." });
  } else {
    try {
      const updatedWilder = await updateWilder(id, firstName, lastName);
      res.json(updatedWilder);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
};

module.exports = {
  get,
  post,
  put,
};

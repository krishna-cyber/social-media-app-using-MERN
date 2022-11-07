const postMessage = require("../models/postMessage.js");

const getpost = async (req, res) => {
  try {
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createpost = async (req, res) => {
  const post = req.body;
  const newpost = new postMessage(post);

  try {
    await newpost.save();
    res.status(201).json(newpost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getpost, createpost };

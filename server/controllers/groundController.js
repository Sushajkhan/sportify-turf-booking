const Ground = require("../models/Ground");

const getGrounds = async (req, res) => {
  try {
    const grounds = await Ground.find();
    res.status(200).send({
      success: true,
      grounds,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: "No grounds listed",
      success: false,
      error,
    });
  }
};
const getGroundById = async (req, res) => {
  try {
    const groundId = req.params.id;
    const ground = await Ground.findById(groundId);
    res.status(200).send({
      success: true,
      ground,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).send({
      message: "ground not found",
      success: false,
      error,
    });
  }
};

module.exports = { getGrounds, getGroundById };

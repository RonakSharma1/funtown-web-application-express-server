const axios = require("axios");

module.exports = async (req, res) => {
  const { participants } = req.query;
  const boredApiUrl = "http://www.boredapi.com/api/activity/";

  try {
    const { data } = await axios.get(boredApiUrl, {
      params: {
        participants: participants,
      },
    });
    console.log(participants);
    res.json(data);
  } catch (error) {
    res.sendStatus(error.message);
  }
};

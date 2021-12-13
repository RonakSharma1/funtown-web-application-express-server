const axios = require("axios");

module.exports.handler = async (req) => {
  const { participants } = req.queryStringParameters;
  const boredApiUrl = "http://www.boredapi.com/api/activity/";
  try {
    const { data } = await axios.get(boredApiUrl, {
      params: {
        participants: participants,
      },
    });
    console.log(data);
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: error.statusCode,
      body: JSON.stringify(error)
    };
  }
};

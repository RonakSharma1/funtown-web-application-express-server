const axios = require("axios");
var config = require("../../config");

module.exports = async (req, res) => {
  const tmdbApiKey = config.TMDB.tmdbApiKey;
  const tmdbApiUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${tmdbApiKey}`;

  try {
    const { data } = await axios.get(tmdbApiUrl);
    res.json(data); // This means it converts the res object into json and sends when called
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
};

const axios = require("axios");
var config = require("../../config.js");

module.exports = async (req, res) => {
  const { pageNumber } = req.query;
  const { tmdbApiKey } = config.TMDB;
  const tmdbGenreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbApiKey}`;
  const tmdbApiUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${tmdbApiKey}&page=${pageNumber}`;

  try {
    const [tmdbApiData, tmbdGenreData] = await Promise.all([
      axios.get(tmdbApiUrl),
      axios.get(tmdbGenreUrl),
    ]);
    const listOfTrendingFilms = tmdbApiData.data.results;
    const listOfGenres = tmbdGenreData.data.genres;
    res.json({
      listOfTrendingFilms: listOfTrendingFilms,
      listOfGenres: listOfGenres,
    });
  } catch (error) {
    console.log(error.message);
    res.sendStatus(error.message);
  }
};

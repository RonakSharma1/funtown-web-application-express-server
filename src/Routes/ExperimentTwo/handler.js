const axios = require("axios");

module.exports.handler = async (req) => {
  const { pageNumber } = req.queryStringParameters;
  const tmdbApiKey = process.env.TMDB_ACCESS_TOKEN
  const tmdbGenreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbApiKey}`;
  const tmdbApiUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${tmdbApiKey}&page=${pageNumber}`;
  try {
    const [tmdbApiData, tmbdGenreData] = await Promise.all([
      axios.get(tmdbApiUrl),
      axios.get(tmdbGenreUrl),
    ]);
    const listOfTrendingFilms = tmdbApiData.data.results;
    const listOfGenres = tmbdGenreData.data.genres;
    
    console.log(listOfTrendingFilms);
    return {
      statusCode: 200,
      body:JSON.stringify({
        "listOfTrendingFilms": listOfTrendingFilms,
        "listOfGenres": listOfGenres,
      })
    };
  } catch (error) {
    return {
      statusCode: error.statusCode,
      body: JSON.stringify(error)
    };
  }
};

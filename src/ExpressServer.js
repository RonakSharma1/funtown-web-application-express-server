const express = require("express");
const cors = require("cors");
const boredApiRouteHandler = require("./Routes/ExperimentOne/boredApiCaller");
const tmdbApiRouteHandler = require("./Routes/ExperimentTwo/TMDBApiCaller");

const app = express();

//MiddleWare Setup
app.use(cors());

//Route the Requests
app.get("/boredApi", boredApiRouteHandler);
app.get("/tmdbApi", tmdbApiRouteHandler);

//Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});

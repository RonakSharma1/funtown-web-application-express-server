const express = require('express');
const cors = require('cors');
const boredApiRouteHandler=require('./Routes/ExperimentOne/BoredApiCaller')

const app = express();

//MiddleWare Setup
app.use(cors());

//Route the Requests
app.get('/boredApi',boredApiRouteHandler);

//Start the server
const port=process.env.PORT || 5000
app.listen(port,()=>{
   console.log('Server has started on port ' + port)
});
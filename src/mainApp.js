const express = require('express');
const cors = require('cors');

const app = express();

//MiddleWare Setup
app.use(cors());

//Route the Requests
app.get('/', function (req, res) {
   res.send('Hello World');
})

//Start the server
const port=process.env.PORT || 5000
app.listen(port,()=>{
   console.log('Server has started on port ${port}')
});
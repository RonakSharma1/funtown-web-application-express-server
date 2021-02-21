const axios = require ('axios')

module.exports = async (req, res) => {

   const {numberOfParticipants} = req.query
   const boredApiUrl = "http://www.boredapi.com/api/activity/";

   try {
      const {data} = await axios.get(boredApiUrl, {
         params: {
             participants: numberOfParticipants
         }});
      res.json(data);

   } catch(error){
      console.log(error.message)
      res.sendStatus(500)
   }
   
}
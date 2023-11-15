var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}` 
  }
};


router.get('/movies', (req, res)=>{


fetch(url, options)
  .then(res => res.json())
  .then(json => {
    res.json({movies: json.results})
  })
  .catch(err => console.error('error:' + err));

  

})

module.exports = router;

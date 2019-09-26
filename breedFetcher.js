const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  const givenURL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;
  request.get(givenURL, (err, response, body) => {
    if (err) {
      return callback(err)
    }
    if (JSON.parse(body)[0] === undefined) {
      return callback(null,"Breed does not exist")
    } else {
      callback(null, JSON.parse(body)[0].description.trim())
    }
  });
}



module.exports = {fetchBreedDescription};
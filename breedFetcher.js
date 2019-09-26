const request = require('request');
const userInputURL = process.argv.slice(2);
const givenURL = 'https://api.thecatapi.com/v1/breeds/search?q=' + userInputURL;

request(givenURL, (err, response, body) => {
  if (err) {
    console.log("Breed not found: ", err);
  };
    
  if (JSON.parse(body)[0] === undefined) {
    console.log("Error: The breed does not exist. No description found!");
  } else {
    const data = JSON.parse(body)[0].description;
    console.log(data);
    console.log(typeof(data));
  }

});

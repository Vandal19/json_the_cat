const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    // console.log('statusCode:', response.statusCode);
    if (error) {
      callback(error, null);
      return; // Return is only required for the first one
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (response.statusCode !== 200) {
      callback("URL is invalid, please check again!", null);
    } else if (breed) {
      callback(null, breed.description);
    } else {
      callback(`Breed is not found, please check BreedName properly again!`, null);
    }
  });
};

module.exports = { fetchBreedDescription };



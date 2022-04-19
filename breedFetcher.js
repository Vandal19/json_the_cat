const request = require('request');
const agrs = process.argv.slice(2);
const breedName = agrs[0];

let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(url, (error, response, body) => {
  console.log('statusCode:', response.statusCode);
  if (response.statusCode !== 200) {
    console.log("URL is undefined, please check properly!");
    return;
  } else if (body === '[]') {
    console.log(`Breed is not found, please check BreedName properly again!`);
    return;
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
    return;
  }
});




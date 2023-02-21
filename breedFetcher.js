const request = require("request");
const breedName = process.argv[2];
const API = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

if (!breedName) {
  console.log("Invalid breed name, try again");
  process.exit();
}

request(API, (error, repsonse, body) => {
  if (error) {
    console.log(`Request error: ${error.message}`);
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});

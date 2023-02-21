const request = require("request");

const fetchBreedDescription = function (breedName, cb) {
  const API = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // check if breed name exists
  if (!breedName) {
    console.log("Invalid breed name, try again");
    return cb(error, null);
  }

  // send request to API using URL with breedName
  request(API, (error, response, body) => {
    // if there is an error, return the error object to the cb
    if (error) {
      return cb(error, null);
    } else {
      // parse the JSON response from the API
      const data = JSON.parse(body);
      if (data.length > 0) {
        // get breed description, and return it to cb
        const breedDescription = data[0].description;
        return cb(null, breedDescription);
      } else {
        // if no breeds are found retun error message to cb
        const error = `No breed found with name ${breedName}`;
        return cb(error, null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };

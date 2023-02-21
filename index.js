const { fetchBreedDescription } = require("./breedFetcher");

// get breed name from cl arguments
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    console.log(desc);
  }
});

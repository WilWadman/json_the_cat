const request = require('request');

// const readCat = function(error, response, body) {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   const data = JSON.parse(body);

//   if (data.length === 0) {
//     console.log(`Cat not found!`);
//     return;
//   }

//   console.log(data[0].description);

// };

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  console.log(url);

  request(url, function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback(`Cat not found!`, null);
      return;
    }

    callback(null,data[0].description);

  });
};

module.exports = { fetchBreedDescription };

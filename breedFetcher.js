const request = require('request');
const args = process.argv;
let slicedArgs = args.slice(2);

callback = function(error, response, body) {
  try {
    const data = JSON.parse(body);


    if (data[0] === undefined) {
      console.log(`Could not find any info on: ${slicedArgs[1]}`);
    } else {


      console.log(data[0]['description']);

    }
  } catch (error) {

    console.log(error);
  }
};





request(`${slicedArgs[0]}${slicedArgs[1]}`, callback);




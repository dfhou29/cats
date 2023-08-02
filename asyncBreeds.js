const fs = require('fs');

const breedDetailsFromFile = (breed, logData) => {
  //console.log('Calling readFile...');

  fs.readFile(`data/${breed}.txt`,'utf8', (err, data) => {
    //console.log(`readFile callback, ${breed}.txt has data.`);
    if (!err) {
      logData(data)
    } else {
      logData(undefined);
    }
  })
}

// const logDataWhenDone = (data) => {
//   console.log('Return Data:', data);
//   return data;
// }

// breedDetailsFromFile('Balinese', logDataWhenDone);

module.exports = breedDetailsFromFile;



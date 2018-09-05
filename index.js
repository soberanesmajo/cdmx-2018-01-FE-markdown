const fs = require('fs');

// Función para leer e identificar las URL's

const readFileMd = () => {
  fs.readFile('./README.md', 'utf8', (err, data) => {
    if (err) {
      console.log('error: ', err);
    } else {
      // console.log(data);
      let regEx = /(http:\/\/|https:\/\/|www\.)[^\s][^)]+/g;
      let newArray = data.match(regEx);
      console.log(newArray);
    }
  });
};

readFileMd();

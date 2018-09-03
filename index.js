const fs = require('fs');

// Función para leer e identificar las URL's

const readFileMd = () => {
  fs.readFile('./README.md', 'utf8', (err, data) => {
    if (err) {
      console.log('error: ', err);
    } else {
      // console.log(data);
      let regEx = /((http:\/\/|https:\/\/|www\.)[^\s]+)/gim;
      let newArray = data.match(regEx);
      // console.log(newArray[0].slice(0, -1));
      for (i = 0; i < newArray.length; i++) {
        let newLink = newArray[i].slice(0, -1);
        // console.log(newLink);
        if (-1 === ',' || '.' || ';' || ':') {
          newLink = newArray[i].slice(0, -2);
          // console.log(newLink);
        }
      }
    }
  });
};

readFileMd();

let fs = require('fs');

// Función que lee README 

fs.readFile('./README.md', 'utf8', (err, data) => {
  if (err) {
    console.log('error: ', err);
  } else {
    console.log(data);
  }
});

// Función para identificar las URL's

fs.readFile('./README.md', 'utf8', (err, data) => {
  if (err) {
    console.log('error: ', err);
  } else {
    let regEx = /((http:\/\/|https:\/\/|www\.)[^\s]+)/gim;
    let txt = data;
    let newArray = data.match(regEx);
    console.log(newArray);
  }
});
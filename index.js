let fs = require('fs');

// Función que lee README 

fs.readFile('./README.md', 'utf8', (err, data) => {
  if (err) {
    console.log('error: ', err);
  } else {
    console.log(data);
  }
});


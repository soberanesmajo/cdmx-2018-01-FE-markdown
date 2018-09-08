const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');

// Función para leer e identificar las URL's

const readFileMd = () => {
  fs.readFile('./README.md', 'utf8', (err, data) => {
    if (err) {
      console.log('error: ', err);
    } else {
      // console.log(data);
      // let regExTxt = /\[[a-zA-Z_ \/$]*\]/gim;
      let regEx = /(http:\/\/|https:\/\/|www\.)[^\s][^)]+/g;
      // let linkText = data.match(regExTxt);
      // console.log(linkText);
      let newArray = data.match(regEx);
      getFetch(newArray);
      getStats(newArray);
    }
  });
};

readFileMd();

const getFetch = (newArray) => { 
  // console.log(newArray);
  for (i = 0; i < newArray.length; i++) {
    let urls = (newArray[i]);
    fetch(urls).then((res) => {
      let resStatus = res.status; 
      let resStatusText = res.statusText;
    })
      .catch(err => console.error(err));
  };
};

const getStats = (newArray) => {
  // console.log(newArray);
  let totalLinks = newArray.length; // total de links
  // console.log(totalLinks);
};

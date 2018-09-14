const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');

const mdLinks = (pathFile) => { 
  const absoluteP = path.resolve(pathFile);
  fs.readFile(absoluteP, 'utf8', (err, data) => {
    if (err) {
      console.log('error: ', err);
    } else {
      let regEx = /(http:\/\/|https:\/\/|www\.)[^\s][^)]+/g;
      let linksArray = data.match(regEx);
      dataArray(linksArray, absoluteP);
      getFetch(linksArray);
      getStats(linksArray);
    }
  });
};

const dataArray = (linksArray, absoluteP) => {
  const newArray = linksArray.map(link => {
    const dataObject = {
      href: link,
      text: null,
      file: absoluteP
    };
    return dataObject;
  });
  console.log(newArray);
  return newArray;
};

const getFetch = (linksArray) => { 
  linksArray.forEach(link => {
    fetch(link).then((res) => {
      let resUrl = res.url;  
      let resStatus = res.status; 
      let resStatusText = res.statusText;
    })
      .catch(err => console.error(err));
  });
};

const getStats = (linksArray) => {
  let totalLinks = linksArray.length; 
};

module.exports = mdLinks;

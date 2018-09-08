const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');


const mdLinks = (pathFile) => { // mdLinks
  const absoluteP = path.resolve(pathFile);
  // console.log(absoluteP);
  fs.readFile(absoluteP, 'utf8', (err, data) => {
    if (err) {
      console.log('error: ', err);
    } else {
      // console.log(data);
      // let regExTxt = /\[[a-zA-Z_ \/$]*\]/gim;
      let regEx = /(http:\/\/|https:\/\/|www\.)[^\s][^)]+/g;
      // let linkText = data.match(regExTxt);
      // console.log(linkText);
      let linksArray = data.match(regEx);
      dataArray(linksArray, absoluteP);
      getFetch(linksArray);
      getStats(linksArray);
    }
  });
};

module.exports = mdLinks;

const dataArray = (linksArray, absoluteP) => {
  const newArray = [];
  for (i = 0; i < linksArray.length; i++) {
    const dataObject = {
      href: linksArray[i],
      text: null,
      file: absoluteP
    };
    newArray.push(dataObject);
  }
};

const getFetch = (linksArray) => { 
  // console.log(linksArray);
  for (i = 0; i < linksArray.length; i++) {
    let urls = (linksArray[i]);
    fetch(urls).then((res) => {
      // console.log(res);
      let resUrl = res.url;  
      let resStatus = res.status; 
      let resStatusText = res.statusText;
    })
      .catch(err => console.error(err));
  };
};

const getStats = (linksArray) => {
  // console.log(linksArray);
  let totalLinks = linksArray.length; // total de links
  // console.log(totalLinks);
};

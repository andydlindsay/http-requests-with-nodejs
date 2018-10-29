const https = require('https');
const log = console.log;

function getAndPrintHTML () {

  var host = 'sytantris.github.io';
  var path = '/http-examples/step2.html';

  var requestOptions = {
    host: host,
    path: path
  };

  /* Add your code here */
  https.get(requestOptions, (res) => {

    // set response encoding
    res.setEncoding('utf8');

    var result = "";

    res.on('data', (data) => {
      result += data;
    });

    res.on('end', () => {
      log(result);
    });

  });

}

getAndPrintHTML();

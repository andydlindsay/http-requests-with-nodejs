var https = require('https');
var log = console.log;

function getAndPrintHTMLChunks () {

  var host = 'sytantris.github.io';
  var path = '/http-examples/step1.html';

  var requestOptions = {
    host: host,
    path: path
  };

  /* Add your code here */
  https.get(requestOptions, (res) => {

    // set response encoding
    res.setEncoding('utf8');

    res.on('data', (data) => {
      log(data + '\n');
    });

    res.on('end', () => {
      log('Response stream complete.');
    });

  });

}

getAndPrintHTMLChunks();
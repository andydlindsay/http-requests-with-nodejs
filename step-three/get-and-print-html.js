const https = require('https');
const log = console.log;

function getAndPrintHTML (options) {

  /* Add your code here */
  https.get(options, (res) => {

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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);

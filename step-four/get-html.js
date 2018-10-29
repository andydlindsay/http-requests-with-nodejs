const https = require('https');
const log = console.log;

function getHTML (options, callback) {

  /* Add your code here */
  https.get(options, (res) => {

    // set response encoding
    res.setEncoding('utf8');

    var result = "";

    res.on('data', (data) => {
      result += data;
    });

    res.on('end', () => {
      callback(result);
    });

  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);

const https = require('https');

module.exports = function getHTML (options, callback) {

  /* Your code here */
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

};

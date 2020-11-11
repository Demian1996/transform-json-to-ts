const cheerio = require('cheerio');
const superagent = require('superagent');

class Crawler {
  run() {
    superagent
      .get(
        'http://swqa.gz.cvte.cn/#/interfaceTest/project/EASICLASS/interfaceView/api/6168/interface/33072'
      )
      .then((res) => {
        const $ = cheerio.load(res.text);

        const editor = $('#brace-editor');

        console.log(editor);
      });
  }
}

module.exports = Crawler;

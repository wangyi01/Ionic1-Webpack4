const http = require('http');
const config = require('../config/config');
const options = config('/api/img/gamecontents');
module.exports = home;
  
function home() {
  const promise = new Promise((resolve, reject) => {
    http.get(options, (res, req, next) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          let parseData = JSON.parse(data),
            gameLists = {status:'',msg:'',data:[]};
          parseData.data.forEach(el => {
            let gameInfor = {
              title: el.title,
              img: el.img,
              state: el.state
            };
            gameLists.data.push(gameInfor);
          });
          gameLists.status=parseData.status;gameLists.msg=parseData.msg;
          // console.log(gameLists);
          resolve(gameLists);
        } catch (e) {
          // reject(e);
        };
      });
    });
  });
  return promise;
};
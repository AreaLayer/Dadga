const request = require('request');
 
const options = {
   url: 'http://127.0.0.1:8080/list',
   json: true,
   body: {}
};
 
request.post(options, (err, res, body) => {
   if (err) {
       return console.log(err);
   }
   console.log(body);
});


'use strict';

 const api = require('./api');
 const ui = require('./ui');
// const app = require('../app.js');


const onCreateUpload = function(event) {
  event.preventDefault();

  console.log("In events");
  let data = new FormData(event.target);
  api.createUpload(data)
    .then((data) => ui.createUploadSuccess(data))
    .catch((error) => ui.createUploadFailure(error));
  };


module.exports = {
  onCreateUpload,
};

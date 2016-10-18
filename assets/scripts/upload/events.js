'use strict';

 const api = require('./api');
 const ui = require('./ui');
// const app = require('../app.js');


const onCreateUpload = function(event) {
  event.preventDefault();

  console.log("In events");
  let data = new FormData(event.target);
  api.createUpload(data)
    .then((data) => ui.onCreateUploadSuccess(data))
    .catch((error) => ui.onCreateUploadFailure(error));
  };

  const onDeleteUpload = function(event) {
    event.preventDefault();
    let id = event.target.id;
    api.deleteUpload(id)
    .then((id) => ui.onDeleteUploadSuccess(id))
    .catch((error) => ui.onDeleteUploadFailure(error));
  };


module.exports = {
  onCreateUpload,
  onDeleteUpload,
};

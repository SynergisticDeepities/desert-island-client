'use strict';

 const api = require('./api');
 const ui = require('./ui');
 const getFormFields = require('../../../lib/get-form-fields');
const app = require('../app.js');


const onCreateUpload = function(event) {
  event.preventDefault();
  let data = new FormData(event.target);
  api.createUpload(data)
    .then((data) => ui.onCreateUploadSuccess(data))
    .catch((error) => ui.onCreateUploadFailure(error));
};

const onDeleteUpload = function(event) {
  event.preventDefault();
  let id = event.target.id;
  api.deleteUpload(id)
  .then(api.getUser)
  .then((data) => ui.updateUserSuccess(data))
  .then(ui.onDeleteUploadSuccess)
  .catch((error) => ui.onDeleteUploadFailure(error));
};

const onEditUpload = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  let imageId = $(event.target).attr('class');
  api.editUpload(data,imageId)
  .then(api.getUser)
  .then((data) => ui.updateUserSuccess(data))
  .then(ui.onThumbnailUpdateSuccess)
  .catch((error) => ui.onEditUploadError(error));
};

const viewUserIsland = function(event){
  event.preventDefault();

  let id = event.target.id;

  let isOwner = (id === app.user._id);

  if (isOwner) {
    api.getUser()
    .then((data) => ui.updateUserSuccess(data))
    .then(ui.onThumbnailUpdateSuccess)
    .catch((error) => ui.onError(error));
  } else {
    // need to render a more limited view state (no upload, edit, delete)
    api.getOtherUser(id)
    .then((data) => ui.updateOtherUserSuccess(data))
    .then(ui.onUpdateOtherUserThumbnailSuccess)
    .catch((error) => ui.onError(error));
  }

};

const addHandlers = function() {
  $('#sidebar').on('click', '.user-link', viewUserIsland);
  $('#multipart-form-data').on('submit', onCreateUpload);
  $('#images-display-box .row').on('click', '.delete', onDeleteUpload);
  $('#edit-form').on('submit', onEditUpload);
};

// const addSidebarHandlers = function(){
//   $('#sidebar').on('click', '.user-link', viewUserIsland);
// };




module.exports = {
  addHandlers
  // onCreateUpload,
  // onDeleteUpload,
  // onEditUpload,
  // addSidebarHandlers,
};

'use strict';

 const api = require('./api');
 const ui = require('./ui');
 const getFormFields = require('../../../lib/get-form-fields');
const app = require('../app.js');


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
  .then(api.getUser)
  .then((data) => ui.updateUserSuccess(data))
  .then(ui.onDeleteUploadSuccess)
  .catch((error) => ui.onDeleteUploadFailure(error));
};

const onEditUpload = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  let imageId = $(event.target).attr('class');
  console.log(imageId);
  api.editUpload(data,imageId)
  .then(api.getUser)
  .then((data) => ui.updateUserSuccess(data))
  .then(ui.onThumbnailUpdateSuccess)
  .catch((error) => ui.onError(error));
};

const viewUserIsland = function(event){
  event.preventDefault();

  let id = event.target.id;

  let isOwner = (id === app.user._id);

  console.log('in viewUserIsland, event.target.id is', event.target.id);
  console.log('in viewUserIsland, isOwner is', isOwner);

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

const addSidebarHandlers = function(){
  $('#sidebar').on('click', '.user-link', viewUserIsland);


};




module.exports = {
  onCreateUpload,
  onDeleteUpload,
  onEditUpload,
  addSidebarHandlers,
};

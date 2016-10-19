'use strict';

const app = require('../../scripts/app');
const displayImageThumbnails = require('../templates/display-images.handlebars');
const otherUserThumbnailUpdate = require('../templates/show-other-user-thumbnails.handlebars');
const displayNameHeader = require('../templates/display-name.handlebars');

const onUploadButtonClick = function() {
  $('#upload-button').on('click', function() {
    $('#uploadModal').modal('show');
  });
};

const onUploadModalClick = function () {
  $('#upload-file-form').on('submit', function() {
    $('#uploadModal').modal('show');
  });
};

const onCreateUploadSuccess = function(data) {
  let newUpload = data.upload;
  app.user.uploads.push(newUpload);
  $('#uploadModal').modal('hide');
  $('#description-div').hide();
  $('#images-display-box').show();
  $('#images-display-box .row').html(displayImageThumbnails(app.user));

  console.log('In onCreateUploadSuccess, data is:' , data);
  console.log('and app.user.uploads is:', app.user.uploads);
};

const onCreateUploadFailure = function(error) {
  console.error('In onCreateUploadFailure, error is:' , error);
};

const updateUserSuccess = function(data) {
  app.user.uploads = data.user.uploads;
  $('header h1').html(displayNameHeader(app.user));
  console.log('in updateUserSuccess, data is:', data);
  console.log('in updateUserSuccess, app.user is:', app.user);
};

const updateOtherUserSuccess = function(data) {
  app.otherUser = data.user;
  $('header h1').html(displayNameHeader(app.otherUser));
  $('#upload-button').hide();
};

const updateUserFailure = function(error) {
  console.error(error);
};

const onDeleteUploadSuccess = function() {
  console.log('in onDeleteUploadSuccess!');
  $('#images-display-box .row').html(displayImageThumbnails(app.user));
};

const onDeleteUploadFailure = function(error) {
  console.log(error);
};

const onThumbnailUpdateSuccess = function(){
  $('#images-display-box .row').html(displayImageThumbnails(app.user));
  $('#editModal').modal('hide');
};

const onUpdateOtherUserThumbnailSuccess = function(){
  $('#images-display-box .row').html(otherUserThumbnailUpdate(app.otherUser));
  $('#editModal').modal('hide');
};

const onError = function(){
  console.log("Sorry, there was an error");
};

module.exports = {
  onUploadModalClick,
  onUploadButtonClick,
  onCreateUploadSuccess,
  onCreateUploadFailure,
  updateUserSuccess,
  updateUserFailure,
  onDeleteUploadSuccess,
  onDeleteUploadFailure,
  onThumbnailUpdateSuccess,
  updateOtherUserSuccess,
  onUpdateOtherUserThumbnailSuccess,
  onError,
};

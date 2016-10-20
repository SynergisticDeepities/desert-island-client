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

const onCreateUploadSuccess = function(data) {
  let newUpload = data.upload;
  app.user.uploads.push(newUpload);
  $('#uploadModal').modal('hide');
  $('#description-div').hide();
  $('#images-display-box').show();
  $('#images-display-box .row').html(displayImageThumbnails(app.user));
};

const onCreateUploadFailure = function() {
  $('#upload-error').show();
};

const updateUserSuccess = function(data) {
  app.user.uploads = data.user.uploads;
  $('header h1').html(displayNameHeader(app.user));
  $('#upload-button').show();
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
  $('#images-display-box .row').html(displayImageThumbnails(app.user));
};

const onDeleteUploadFailure = function(error) {
  console.error(error);
};

const onThumbnailUpdateSuccess = function(){
  $('#images-display-box .row').html(displayImageThumbnails(app.user));
  $('#editModal').modal('hide');
};

const onUpdateOtherUserThumbnailSuccess = function(){
  $('#images-display-box .row').html(otherUserThumbnailUpdate(app.otherUser));
  $('#editModal').modal('hide');
};

const onError = function(error){
  console.error(error);
};

module.exports = {
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

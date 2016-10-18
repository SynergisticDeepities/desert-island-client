'use strict';

const app = require('../../scripts/app');
const displayImageThumbnails = require('../templates/display-images.handlebars');

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
  console.log('in updateUserSuccess, data is:', data);
  console.log('in updateUserSuccess, app.user is:', app.user);
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


module.exports = {
  onUploadModalClick,
  onUploadButtonClick,
  onCreateUploadSuccess,
  onCreateUploadFailure,
  updateUserSuccess,
  updateUserFailure,
  onDeleteUploadSuccess,
  onDeleteUploadFailure,
};

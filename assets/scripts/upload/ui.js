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

const createUploadSuccess = function(data) {
  let newUpload = data.upload;
  app.user.uploads.push(newUpload);
  $('#uploadModal').modal('hide');
  $('#description-div').hide();
  $('#images-display-box').show();
  $('#images-display-box .row').html(displayImageThumbnails(app.user));

  console.log('In onCreateUploadSuccess, data is:' , data);
  console.log('and app.user.uploads is:', app.user.uploads);
};

const createUploadFailure = function(error) {
  console.error('In onCreateUploadFailure, error is:' , error);
};


module.exports = {
  onUploadModalClick,
  onUploadButtonClick,
  createUploadSuccess,
  createUploadFailure,
};

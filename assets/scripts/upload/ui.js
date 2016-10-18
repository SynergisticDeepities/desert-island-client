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

const updateUserImages = function(){
  let id = app.user._id;
  let token = app.user.token;
  return $.ajax({
    url: app.host+'/users/'+ id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token
      }
    });
  };


const onDeleteUploadSuccess = function() {
  updateUserImages()
  .done(console.log("success!"))
  .fail(console.log("fail!"));
};

const onDeleteUploadFailure = function(error) {
  console.log(error);
};


module.exports = {
  onUploadModalClick,
  onUploadButtonClick,
  onCreateUploadSuccess,
  onCreateUploadFailure,
  onDeleteUploadSuccess,
  onDeleteUploadFailure,
};

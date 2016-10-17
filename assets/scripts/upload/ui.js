'use strict';

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
  console.log('In Create Upload Success, data is' , data);
};

const onCreateUploadFailure = function(error) {
  console.error('In Create Upload Failure, error is' , error);
};


module.exports = {
  onUploadModalClick,
  onUploadButtonClick,
  onCreateUploadSuccess,
  onCreateUploadFailure
};

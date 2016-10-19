'use strict';

const signUpModal = function() {
  $('#sign-up-error').hide();
  $('#signUpModal').modal('show');
};

const signInModal = function() {
  $('#sign-in-error').hide();
  $('#signInModal').modal('show');
};

const changePasswordModal = function() {
    $('#changePasswordModal').modal('show');
    $('#change-password-error').hide();
    // $('#sign-out-button').show();
    // $('.signed-out').hide();
};

const uploadModal = function() {
  $('#upload-error').hide();
  $('#uploadModal').modal('show');
};

const editImageModal = function() {
    let this_id = $(this).attr('id');
    $('#edit-form').attr('class',this_id);
    $('#editModal').modal('show');
};

const addHandlers = function() {
  $('#upload-button').on('click', uploadModal);
  $('#sign-up-button').on('click', signUpModal);
  $('#sign-in-button').on('click', signInModal);
  $('#change-password-button').on('click', changePasswordModal);
  $('#images-display-box .row').on('click', '.edit-button', editImageModal);
};


module.exports = {
  addHandlers
};

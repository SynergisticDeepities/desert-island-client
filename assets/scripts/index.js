'use strict';

const events = require('./auth/events.js');
const uploadHandlers = require('./upload/ui.js');

$(document).ready(function(){
  $('#upload-button').on('click', function() {
    $('#uploadModal').modal('show');
  });
  uploadHandlers.onUploadModalClick();
  $('#sign-out').hide();
  // $('#change-password').hide();
  $('#sign-up-button').on('click', function(){
    $('#signUpModal').modal('show');
  });
  $('#sign-up-form').on('submit', events.onSignUp);

  $('#sign-in-button').on('click', function(){
    $('#signInModal').modal('show');
  });
  $('#sign-in-form').on('submit', events.onSignIn);

  $('#change-password-button').on('click', function(){
    $('#changePasswordModal').modal('show');
    $('#sign-out-button').show();
    $('.signed-out').hide();
  });
  $('#change-password-form').on('submit', events.onChangePassword);
  $('.close').on('click', function(){
    $('.signed-out').show();
  });
});

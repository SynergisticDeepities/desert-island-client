'use strict';

const authEvents = require('./auth/events.js');
const uploadEvents = require('./upload/events.js');

$(document).ready(function(){
  $('.signed-in').hide();
  $('#images-display-box').hide();
  $('#upload-button').on('click', function() {
    $('#uploadModal').modal('show');
  });
  $('#sign-out').hide();
  // $('#change-password').hide();
  $('#sign-up-button').on('click', function(){
    $('#signUpModal').modal('show');
  });
  $('#sign-up-form').on('submit', authEvents.onSignUp);

  $('#sign-in-button').on('click', function(){
    $('#signInModal').modal('show');
  });
  $('#sign-in-form').on('submit', authEvents.onSignIn);
  $('#sign-out-button').on('click', authEvents.onSignOut);

  $('#change-password-button').on('click', function(){
    $('#changePasswordModal').modal('show');
    $('#sign-out-button').show();
    $('.signed-out').hide();
  });
  $('#change-password-form').on('submit', authEvents.onChangePassword);
  // $('.close').on('click', function(){
  //   $('.signed-out').show();
  // });
  //$('#multipart-form-data').on('submit', events.onCreateUpload);
  $('#multipart-form-data').on('submit', uploadEvents.onCreateUpload);
});

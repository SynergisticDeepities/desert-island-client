'use strict';

$(document).ready(function(){
  $('#sign-out').hide();
  // $('#change-password').hide();
  $('#sign-up-button').on('click', function(){
    $('#signUpModal').modal('show');
    $('#sign-out-button').show();
    $('.signed-out').hide();
  });
  $('#sign-in-button').on('click', function(){
    $('#signInModal').modal('show');
    $('#sign-out-button').show();
    $('.signed-out').hide();
  });
  $('#change-password-button').on('click', function(){
    $('#changePasswordModal').modal('show');
    $('#sign-out-button').show();
    $('.signed-out').hide();
  });
  $('.close').on('click', function(){
    $('.signed-out').show();
  })
});

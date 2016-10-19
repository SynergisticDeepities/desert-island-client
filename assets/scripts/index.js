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

  $('#multipart-form-data').on('submit', uploadEvents.onCreateUpload);
  $('#images-display-box .row').on('click', '.delete', uploadEvents.onDeleteUpload);
  $('#images-display-box .row').on('click', '.edit-button', function() {
    let this_id = $(this).attr('id');
    $('#edit-form').attr('class',this_id);
    $('#editModal').modal('show');
  });
  $('#edit-form').on('submit', uploadEvents.onEditUpload);

// SIDE BAR FUNCTIONALITY

// added code from bootsnip for sidebar
  let trigger = $('.hamburger'),
    overlay = $('.overlay'),
    isClosed = false;

  function hamburger_cross() {

    if (isClosed == true) {
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }

  trigger.click(function () {
    hamburger_cross();
  });

  $('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('toggled');
  });

  uploadEvents.addSidebarHandlers();

  $('#sidebar').on('click', '.user-link', (function () {
    hamburger_cross();
    $('#wrapper').toggleClass('toggled');
  }));

});

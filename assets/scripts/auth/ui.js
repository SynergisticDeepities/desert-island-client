'use strict';

const app = require('../../scripts/app');
const displayImageThumbnails = require('../templates/display-images.handlebars');

const onSignUpSuccess = function (data) {
  if (data) {
    console.log(data);
    $('#signUpModal').modal('hide');
  }
};

const onSignInSuccess = function (data) {
    console.log(data);
    app.user = data.user;
    $('#signInModal').modal('hide');
    $('.signed-out').hide();
    $('.signed-in').show();
    $('#images-display-box').show();
    $('#images-display-box .row').append(displayImageThumbnails(app.user));
    // debugger;
};

const onChangePasswordSuccess = function(){
  $('#changePasswordModal').modal('hide');
};

const onError = function () {
  console.log("Sorry, there was an error.");
};

const signOutSuccess = function () {
  $('.signed-in').hide();
  $('#images-display-box .row').html('');
  $('#images-display-box').hide();
  $('.signed-out').show();
  app.user = null;
};


module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  signOutSuccess,
  onError,
};

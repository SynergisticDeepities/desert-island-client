'use strict';

const app = require('../../scripts/app');
const displayImageThumbnails = require('../templates/display-images.handlebars');
const displayNameHeader = require('../templates/display-name.handlebars');

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
    $('#description-div').hide();
    $('.signed-in').show();
    $('.navbar').css('float', 'left');
    $('.navbar').css('margin-left', '250px');
    $('.navbar').css('margin-top', '25px');
    $('.navbar').css('margin-right', '-125px');
    $('#images-display-box').show();
    $('header h1').html(displayNameHeader(app.user));
    $('#images-display-box .row').append(displayImageThumbnails(app.user));
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
  $('#description-div').show();
  $('.navbar').css('float', 'none');
  $('.navbar').css('margin', '0 auto');
  app.user = null;
};


module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  signOutSuccess,
  onError,
};

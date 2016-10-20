'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const logInViewState = function() {
  $('.hamburger').hide();
  $('#images-display-box').hide();
  $('#sign-out').hide();
};

const hideErrors = function() {
  $('.signed-in').hide();
  $('#sign-in-error').hide();
  $('#sign-up-error').hide();
  $('#change-password-error').hide();
  $('#upload-error').hide();
  $('#edit-upload-error').hide();
};

const onSignUp = function(event) {
  event.preventDefault();
  let signUpData = getFormFields(event.target);
  api.signUp(signUpData)
    .then((data) => {
      return api.signIn(signUpData);
    })
    .then((data) => ui.onSignInSuccess(data))
    .then(api.getAllUsers)
    .then((data) => ui.sidebarSuccess(data))
    .catch((error) => ui.onSignUpError(error));
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .then((data) => ui.onSignInSuccess(data))
    .then(api.getAllUsers)
    .then((data) => ui.sidebarSuccess(data))
    .catch((error) => ui.onSignInError(error));
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .then((data)=> ui.onChangePasswordSuccess(data))
    .catch((error)=>ui.onChangePasswordError(error));
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .then((data) => ui.signOutSuccess(data))
    .catch((error)=>ui.onError(error));
};

const addHandlers = function() {
  $('#sign-up-form').on('submit', onSignUp);
  $('#sign-in-form').on('submit', onSignIn);
  $('#sign-out-button').on('click', onSignOut);
  $('#change-password-form').on('submit', onChangePassword);
};

module.exports = {
  addHandlers,
  logInViewState,
  hideErrors
  // onSignUp,
  // onSignIn,
  // onChangePassword,
  // onSignOut
};

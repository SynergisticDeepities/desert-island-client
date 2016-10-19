'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onSignUp = function(event) {
  event.preventDefault();
  let signUpData = getFormFields(event.target);
  api.signUp(signUpData)
    .then((data) => {
      console.log('before auto sign-in, data is:', data);
      console.log('and signUpData is:', signUpData);
      return api.signIn(signUpData);
      // return data;
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
    .catch((error) => ui.onError(error));
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .then((data)=> ui.onChangePasswordSuccess(data))
    .catch((error)=>ui.onError(error));
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .then((data) => ui.signOutSuccess(data))
    .catch((error)=>ui.onError(error));
};


module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
};

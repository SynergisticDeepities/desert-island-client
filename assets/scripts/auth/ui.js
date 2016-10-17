'use strict';

const app = require('../../scripts/app');

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
};

const onChangePasswordSuccess = function(){
  console.log("Password successfully changed.");
};

const onError = function () {
  console.log("Sorry, there was an error.");
};



module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onError,
};

'use strict';

const app = require('./app');

const onSignUpSuccess = function (data) {
  if (data) {
    console.log(data);
  }
};

const onSignInSuccess = function (data) {
    app.user = data.user;
    console.log(data);
};

const onChangePasswordSuccess = function(){
  console.log("Password successfully changed.");
};



module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
};

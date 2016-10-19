'use strict';

const app = require('../../scripts/app');

const signUp = function(data) {
  return new Promise((resolve, reject) => {
    return  $.ajax({
      url: app.host + '/sign-up',
      method: 'POST',
      data: data,
      success(data) {
        resolve(data);
      },
      error(jqxhr, textStatus, errorThrown) {
        reject({
          jqxhr: jqxhr,
          textStatus: textStatus,
          errorThrown: errorThrown
        });
      }
    });
  });
};

const signIn = function(data) {
  return new Promise((resolve, reject) => {
    return  $.ajax({
      url: app.host + '/sign-in',
      method: "POST",
      data: data,
      success(data) {
        resolve(data);
      },
      error(jqxhr, textStatus, errorThrown) {
        reject({
          jqxhr: jqxhr,
          textStatus: textStatus,
          errorThrown: errorThrown
        });
      }
    });
  });
};


const changePassword = function(data){
  return new Promise((resolve, reject) => {
    let id = app.user._id;
    return  $.ajax({
      url: app.host + '/change-password/' + id,
      method: "PATCH",
      headers: {
        Authorization: 'Token token=' + app.user.token
      },
      data: data,
      success(data) {
        resolve(data);
      },
      error(jqxhr, textStatus, errorThrown) {
        reject({
          jqxhr: jqxhr,
          textStatus: textStatus,
          errorThrown: errorThrown
        });
      }
    });
  });
};

const signOut = function() {
  return new Promise((resolve, reject) => {
    return $.ajax({
      url: app.host + '/sign-out/' + app.user._id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + app.user.token
      },
      success(data) {
        resolve(data);
      },
      error(jqxhr, textStatus, errorThrown) {
        reject({
          jqxhr: jqxhr,
          textStatus: textStatus,
          errorThrown: errorThrown
        });
      }
    });
  });
};

const getAllUsers = function() {
  return new Promise((resolve, reject) => {
    return $.ajax({
      url: app.host + '/users',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + app.user.token
      },
      success(data) {
        resolve(data);
      },
      error(jqxhr, textStatus, errorThrown) {
        reject({
          jqxhr: jqxhr,
          textStatus: textStatus,
          errorThrown: errorThrown
        });
      }
    });
  });
};

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getAllUsers
};

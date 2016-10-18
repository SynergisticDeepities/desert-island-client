'use strict';

const app = require('../app.js');

const createUpload = function (data) {
  return new Promise((resolve, reject) => {
    return $.ajax({
      url: app.host + "/uploads",
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + app.user.token
      },
      data,
      contentType: false,
      processData: false,
      success(data) {
        resolve(data);
      },
      failure (jqxhr) {
        reject(jqxhr);
      }
    });
  });
};

const deleteUpload = function (id) {
  return new Promise((resolve, reject) => {
    return $.ajax({
      url: app.host + "/uploads/" + id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + app.user.token
      },
      contentType: false,
      processData: false,
      success(data) {
        resolve(data);
      },
      failure (jqxhr) {
        reject(jqxhr);
      }
    });
  });
};

module.exports = {
  createUpload,
  deleteUpload,
};

'use strict';

const authEvents = require('./auth/events.js');
const uploadEvents = require('./upload/events.js');
const modalEvents = require('./modals.js');

$(document).ready(function(){
  authEvents.logInViewState();
  authEvents.hideErrors();

// SIDE BAR FUNCTIONALITY
  let trigger = $('.hamburger'),
    overlay = $('.overlay'),
    isClosed = false;

  function hamburger_cross() {
    if (isClosed === true) {
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

  $('#sidebar').on('click', '.user-link', (function () {
    hamburger_cross();
    $('#wrapper').toggleClass('toggled');
  }));

  // CLICK HANDLERS
  authEvents.addHandlers();
  uploadEvents.addHandlers();
  modalEvents.addHandlers();

});

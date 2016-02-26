'use strict';

/**
 * determine whether or not the browsing environment supports touch events
 *
 * @returns {boolean}
 */
module.exports = function touchEventsExist() {
  var evt;

  try {
    evt = document.createEvent( 'TouchEvent' );
    evt.initEvent( 'touchstart', true, true );
    return document.dispatchEvent( evt );
  } catch( err ) {
    return false;
  }
};
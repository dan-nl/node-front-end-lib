'use strict';

/**
 * @link http://tosbourn.com/a-fix-for-window-location-origin-in-internet-explorer/
 * @returns {string}
 */
module.exports = function getWindowLocationOrigin() {
  if ( !window.location.origin ) {
    window.location.origin =
      window.location.protocol + "//" +
      window.location.hostname +
      ( window.location.port ? ':' + window.location.port : '' );
  }

  return window.location.origin;
};
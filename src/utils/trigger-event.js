'use strict';

/**
 * @param {string} event
 * @param {HTMLElement} elm
 */
module.exports = function triggerEvent( event, elm ) {
  var evt;

  if ( typeof event !== 'string' ) {
    console.warn( 'triggerEvent( ' + event + ', ' + elm + ' ) event not provided as a string' );
    return;
  }

  if ( elm.constructor.toString().indexOf( 'HTML' ) === -1 ) {
    console.warn( 'triggerEvent( ' + event + ', ' + elm + ' ) elm not provided as an HTMLElement' );
    return;
  }

  evt = document.createEvent( event );
  evt.initEvent( 'resize', true, true );
  elm.dispatchEvent( evt );
};
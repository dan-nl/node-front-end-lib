'use strict';

/**
 * @link https://developer.mozilla.org/en-US/docs/Web/Events
 *
 * @param {string} event_name
 * @param {string} event_type
 * @param {HTMLElement} elm
 */
module.exports = function triggerEvent( event_name, event_type, elm ) {
  var evt;

  if ( typeof event !== 'string' ) {
    console.warn( 'triggerEvent( ' + event_name + ', ' + event_type + ', ' + elm + ' ) event_name not provided as a string' );
    return;
  }

  if ( typeof event !== 'string' ) {
    console.warn( 'triggerEvent( ' + event_name + ', ' + event_type + ', ' + elm + ' ) event_type not provided as a string' );
    return;
  }

  if ( elm.constructor.toString().indexOf( 'HTML' ) === -1 && elm.constructor.toString().indexOf( 'Window' ) === -1 ) {
    console.warn( 'triggerEvent( ' + event_name + ', ' + event_type + ', ' + elm + ' ) elm not provided as an HTMLElement or Window' );
    return;
  }

  evt = document.createEvent( event_type );
  evt.initEvent( event_name, true, true );
  elm.dispatchEvent( evt );
};
'use strict';

/**
 * @link https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
 */
module.exports = function addCustomEvent() {
  if ( window.CustomEvent instanceof Function ) {
    return;
  }

  function CustomEvent( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
};
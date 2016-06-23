'use strict';

/**
 * @param {HTMLElement} elm
 * @param {string} event_name
 * @param {Function} fn
 * @param {Object} event_data
 */module.exports = function bindEventDataToEvent( elm, event_name, fn, event_data ) {
  if ( !elm ) {
    console.warn( 'bindEventDataToEvent(): elm not provided as an element' );
    return;
  }

  if ( typeof event_name !== 'string' ) {
    console.warn( 'bindEventDataToEvent(): event_name not provided as a string' );
    return;
  }

  if ( !( fn instanceof Function ) ) {
    console.warn( 'bindEventDataToEvent(): fn not provided as an Object' );
    return;
  }

  if ( !( event_data instanceof Object ) ) {
    event_data = {};
  }

  elm.addEventListener(
    event_name,
    function bindEventData( evt ) {
      /*jshint validthis:true */
      evt.event_data = event_data;
      fn.call( this, evt );
    }
  );
};

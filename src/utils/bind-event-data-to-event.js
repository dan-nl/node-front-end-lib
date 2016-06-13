'use strict';

/**
 * @param {HTMLElement} elm
 * @param {string} event_name
 * @param {Function} fn
 * @param {Object} event_data
 */module.exports = function bindEventDataToEvent( elm, event_name, fn, event_data ) {
  elm.addEventListener(
    event_name,
    function bindEventData( evt ) {
      /*jshint validthis:true */
      evt.event_data = event_data;
      fn.call( this, evt );
    }
  );
};

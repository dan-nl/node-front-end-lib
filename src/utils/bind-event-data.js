'use strict';

/**
 * @param {HTMLElement} elm
 * @param {string} type
 * @param {Function} fn
 * @param {Object} event_data
 */module.exports = function bindEventData( elm, type, fn, event_data ) {
  elm.addEventListener(
    type,
    function bindEventData( evt ) {
      /*jshint validthis:true */
      fn.call( this, evt, event_data );
    }
  );
};

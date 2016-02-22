'use strict';

/**
 * using setInterval(), checks for the presence of an object on the window global object
 *
 * the initial use case is when an external script has been lazy loaded and you want to
 * make sure its main object is available before using it
 *
 * @param {string} object_name
 * @param {Function} [callback]
 * @param {number} [interval_delay]
 * @param {number} [interval_max]
 */
module.exports = function checkForObject( object_name, callback, interval_delay, interval_max ) {
  var interval;
  var interval_count;

  if ( typeof object_name !== 'string' ) {
    console.warn( 'checkForObject( ' + object_name + ',' + callback + ', ' + interval_delay + ', ' + interval_max + ' ): object name not provided as string' );
    return;
  }

  interval_count = 0;
  interval_delay = interval_delay || 10;
  interval_max = interval_max || 100;

  interval = setInterval(
    function checkForObjectSetInterval() {
      if ( interval_count > interval_max ) {
        console.warn( 'checkForObject( ' + object_name + ',' + callback + ', ' + interval_delay + ', ' + interval_max + ' ): object not present' );
        clearInterval( interval );
        return;
      }

      if ( !window[object_name] ) {
        interval_count += 1;
        return;
      }

      clearInterval( interval );

      if ( callback instanceof Function ) {
        callback();
      }
    },
    interval_delay
  );
};
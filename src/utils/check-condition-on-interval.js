'use strict';

/**
 * module variables
 */
var Promise;

/**
 * vairable assignments
 */
Promise = require( 'bluebird' );

/**
 * using setInterval(), checks for the given condition,
 * which should be a function that returns a truthy or falsy result
 *
 * @param {Function} condition
 * @param {number} [interval_delay]
 * @param {number} [interval_max]
 *
 * @returns {Promise}
 */
module.exports = function checkOnConditionInterval( condition, interval_delay, interval_max ) {
  return new Promise(
    /**
     * @param {Function} resolve
     * @param {Function} reject
     */
    function checkOnConditionIntervalPromise( resolve, reject ) {
      var interval;
      var interval_count;

      if ( !( condition instanceof Function ) ) {
        reject( new Error( 'checkOnConditionIntervalPromise( ' + condition + ', ' + interval_delay + ', ' + interval_max + ' ) condition not provided as a Function' ) );
        return;
      }

      interval_count = 0;
      interval_delay = interval_delay || 10;
      interval_max = interval_max || 100;

      interval = setInterval(
        function checkOnConditionIntervalFunction() {
          if ( interval_count > interval_max ) {
            clearInterval( interval );
            reject( new Error( 'checkOnConditionIntervalFunction( ' + condition + ',' + interval_delay + ', ' + interval_max + ' ) condition not met' ) );
            return;
          }

          if ( !condition() ) {
            interval_count += 1;
            return;
          }

          clearInterval( interval );
          resolve( true );
        },
        interval_delay
      );
    }
  );
};
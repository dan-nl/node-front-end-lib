'use strict';

/**
 * adds a callback to a given array of callbacks.
 * ensures that the callback is a function and that the callbacks are an array.
 *
 * @param {Function} callback
 * @param {Array} callbacks
 * @returns {boolean}
 */
module.exports = function addCallback( callback, callbacks ) {
  if ( !( callback instanceof Function ) ) {
    return false;
  }

  if ( !( callbacks instanceof Array ) ) {
    return false;
  }

  callbacks.push( callback );
  return true;
};
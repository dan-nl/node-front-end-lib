'use strict';

/**
 * https://github.com/jashkenas/underscore
 * https://davidwalsh.name/javascript-debounce-function
 *
 * returns a function, that, as long as it continues to be invoked, will not
 * be triggered. the function will be called after it stops being called for
 * N milliseconds. if `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @returns {Function}
 */
module.exports = function debounce( func, wait, immediate ) {
  var timeout;

  return function () {
    var args;
    var callNow;
    var context;
    var later;

    context = this;
    args = arguments;

    later = function () {
      timeout = null;

      if ( !immediate ) {
        func.apply( context, args );
      }
    };

    callNow = immediate && !timeout;
    clearTimeout( timeout );
    timeout = setTimeout( later, wait );

    if ( callNow ) {
      func.apply( context, args );
    }
  };
};
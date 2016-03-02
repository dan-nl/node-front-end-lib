'use strict';

/**
 * given an array of callbacks, calls each one using the apply method,
 * passing in any arguments provided less the initial array of callbacks
 *
 * @param {Array} callbacks
 */
module.exports = function callCallbacks( callbacks ) {
  var args;
  var i;

  if ( !( callbacks instanceof Array ) ) {
    return;
  }

  args = [];

  for ( i = 1; i < arguments.length; i += 1 ) {
    args.push( arguments[ i ] );
  }

  for ( i = 0; i < callbacks.length; i += 1 ) {
    if ( callbacks[ i ] instanceof Function ) {
      callbacks[ i ].apply( this, args );
    }
  }
};
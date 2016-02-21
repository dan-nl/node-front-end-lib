'use strict';

/**
 * module variables
 */
var callbacks;
var debounce;
var listener_added;

/**
 * variable assignments
 */
debounce = require( './debounce' );

function callCallbacks() {
  var i;

  for ( i = 0; i < callbacks.length; i += 1 ) {
    callbacks[ i ]();
  }
}

function setup() {
  if ( listener_added ) {
    return;
  }

  callbacks = [];

  window.addEventListener(
    'resize',
    debounce(
      callCallbacks,
      400
    )
  );

  listener_added = true;
}

/**
 * registers the callback with a universal window onresize event listener,
 * which is called via a debounce function that is set with a hard coded
 * timeout of 400 milliseconds
 *
 * @param {Function} callback
 */
module.exports = function windowResize( callback ) {
  setup();
  callbacks.push( callback );
};
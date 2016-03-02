'use strict';

/**
 * module variables
 */
var addCallback;
var callbacks;
var callCallbacks;
var debounce;
var listener_added;

/**
 * variable assignments
 */
addCallback = require( './add-callback' );
callCallbacks = require( './call-callbacks' );
debounce = require( './debounce' );

function debounceFunction() {
  callCallbacks( callbacks );
}

function addListener() {
  if ( listener_added ) {
    return;
  }

  window.addEventListener(
    'resize',
    debounce(
      debounceFunction,
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
  if ( !callbacks ) {
    callbacks = [];
  }

  if ( !addCallback( callback, callbacks ) ) {
    return;
  }

  addListener();
};
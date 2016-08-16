'use strict';

/**
 * module variables
 */
var hasClass;
var addClassFallback;

/**
 * variable assignments
 */
hasClass = require( './has-class' );
addClassFallback = require( './class-fallback' ).addClass;

/**
 * adds the class, or classes, given, to the elm provided, with an optional callback called after the operation has completed
 *
 * @public
 * @param {Element} elm
 * @param {string|Array} class_name
 * @param {Function} [callback]
 */
module.exports = function addClass( elm, class_name, callback ) {
  var i;
  var error;

  // validations
  if ( !elm || ( elm.constructor.toString().indexOf( 'HTML' ) === -1 && elm.constructor.toString().indexOf( 'SVG' ) === -1 ) ) {
    console.warn( 'addClass( ' + elm + ', ' + class_name + ' ): elm not provided as an HTMLElement' );
    error = new Error( 'stack trace' );
    console.warn( error.stack );
    return;
  }

  if ( typeof class_name !== 'string' && !( class_name instanceof Array ) ) {
    console.warn( 'addClass( ' + elm + ', ' + class_name + ', ' + callback + ' ): class name not provided as a string or Array' );
    error = new Error( 'stack trace' );
    console.warn( error.stack );
    return;
  }

  // handle Array of classes
  if ( class_name instanceof Array ) {
    for ( i = 0; i < class_name.length; i += 1 ) {
      addClass( elm, class_name[ i ] );
    }

    return;
  }

  if ( !hasClass( elm, class_name ) ) {
    if ( elm.classList ) {
      // add class via classList
      elm.classList.add( class_name );
    } else if ( elm.setAttribute ) {
      // add class via setAttribute
      addClassFallback( elm, class_name );
    } else if ( elm.className ) {
      elm.className = class_name;
    } else {
      console.warn(
        'addClass( ' +
        elm +
        ', ' +
        class_name +
        ', ' +
        callback +
        ' ): doesn\'t support className or classList mutation.'
      );
    }
  }

  // callback
  if ( callback instanceof Function ) {
    callback();
  }
};

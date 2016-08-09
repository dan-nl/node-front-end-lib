'use strict';

/**
 * removes the class, or classes, given, from the elm provided, with an optional callback called after the operation has completed
 *
 * @param {Element} elm
 * @param {string|Array} class_name
 * @param {Function|undefined} [callback]
 */
module.exports = function removeClass( elm, class_name, callback ) {
  var error;
  var i;
  var removed;

  // validations
  if ( !elm || ( elm.constructor.toString().indexOf( 'HTML' ) === -1 && elm.constructor.toString().indexOf( 'SVG' ) === -1 ) ) {
    console.warn( 'removeClass( ' + elm + ', ' + class_name + ' ): elm not provided as an HTMLElement' );
    error = new Error( 'stack trace' );
    console.warn( error.stack );
    return;
  }

  if ( typeof class_name !== 'string' && !( class_name instanceof Array ) ) {
    console.warn( 'removeClass( ' + elm + ', ' +  class_name + ', ' + callback + ' ): class name not provided as a string or Array' );
    error = new Error( 'stack trace' );
    console.warn( error.stack );
    return;
  }

  // handle Array of class names
  if ( class_name instanceof Array ) {
    for ( i = 0; i < class_name.length; i += 1 ) {
      removeClass( elm, class_name[i] );
    }
  }

  // remove class via classList
  if ( !removed && elm.classList ) {
    elm.classList.remove( class_name );
    removed = true;
  }

  // remove class via className
  if ( !removed && elm && elm.className && typeof elm.className.replace === 'function' ) {
    elm.className =
      elm.className.replace( new RegExp( '(^|\\s)' + class_name + '($|\\s)' ), ' ' )
        .replace( /^\s+|\s+$/g, '' );
  }

  // callback
  if ( callback instanceof Function ) {
    callback();
  }
};

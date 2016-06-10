'use strict';

/**
 * removes the class, or classes, given, from the elm provided, with an optional callback called after the operation has completed
 *
 * @param {Element} elm
 * @param {string|Array} class_name
 * @param {Function|undefined} [callback]
 */
module.exports = function removeClass( elm, class_name, callback ) {
  var i;
  var removed;

  // validations
  if ( typeof class_name !== 'string' && !( class_name instanceof Array ) ) {
    console.warn( 'removeClass( ' + elm + ', ' +  class_name + ', ' + callback + ' ): class name not provided as a string or Array' );
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
  if ( !removed ) {
    elm.className =
      elm.className.replace( new RegExp( '(^|\\s)' + class_name + '($|\\s)' ), ' ' )
        .replace( /^\s+|\s+$/g, '' );
  }

  // callback
  if ( callback && callback instanceof Function ) {
    callback();
  }
};
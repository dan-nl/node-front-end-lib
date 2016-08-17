'use strict';

/**
 * module variables
 */
var hasClass;

/**
 * variable assignments
 */
hasClass = require( './has-class' );

/**
 * @param {string} class_string
 * @param {string} class_name
 * @returns {string}
 */
function addClassString( class_string, class_name ) {
  return ( class_string + ' ' + class_name ).trim();
}

/**
 * adds the class, or classes, given, to the elm provided, with an optional callback called after the operation has completed
 *
 * @public
 * @param {Element} elm
 * @param {string|Array} class_name
 * @param {Function} [callback]
 */
module.exports = function addClass( elm, class_name, callback ) {
  var added;
  var error;
  var i;

  // validations
  if ( !elm || ( elm.constructor.toString().indexOf( 'HTML' ) === -1 && elm.constructor.toString().indexOf( 'SVG' ) === -1 ) ) {
    console.warn( 'addClass( ' + elm + ', ' + class_name + ' ): elm not provided as an HTMLElement or an SVGElement' );
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

  if ( hasClass( elm, class_name ) ) {
    added = true;
  }

  // add class via classList
  if ( !added && elm.classList ) {
    elm.classList.add( class_name );
    added = true;
  }

  // add class via className
  if ( !added && elm.className ) {
    elm.className = addClassString( elm.className, class_name );
    added = true;
  }

  // add class via setAttribute & getAttribute
  if ( !added && elm.setAttribute && elm.getAttribute ) {
    elm.setAttribute( 'class', addClassString( elm.getAttribute( 'class' ), class_name ) );
  }

  // callback
  if ( callback instanceof Function ) {
    callback();
  }
};

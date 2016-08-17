'use strict';

/**
 * @param {string} class_string
 * @param {string} class_name
 * @returns {boolean}
 */
function containsClassName( class_string, class_name ) {
  return new RegExp( '(^|\\s)' + class_name + '($|\\s)' ).test( class_string );
}

/**
 * returns whether or not the given elm has the class name provided
 *
 * @param {Element} elm
 * @param {string} class_name
 * @returns {boolean|undefined}
 */
module.exports = function hasClass( elm, class_name ) {
  var error;

  // validations
  if ( !elm || ( elm.constructor.toString().indexOf( 'HTML' ) === -1 && elm.constructor.toString().indexOf( 'SVG' ) === -1 ) ) {
    console.warn( 'hasClass( ' + elm + ', ' + class_name + ' ): elm not provided as an HTMLElement or an SVGElement' );
    error = new Error( 'stack trace' );
    console.warn( error.stack );
    return;
  }

  if ( typeof class_name !== 'string' ) {
    console.warn( 'hasClass( ' + elm + ', ' + class_name + ' ): class name not provided as a string' );
    error = new Error( 'stack trace' );
    console.warn( error.stack );
    return;
  }

  if ( elm.classList ) {
    return elm.classList.contains( class_name );
  }

  if ( elm.className ) {
    return containsClassName( elm.className, class_name );
  }

  if ( elm.getAttribute ) {
    return containsClassName( elm.getAttribute( 'class' ), class_name );
  }
};

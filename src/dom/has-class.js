'use strict';

/**
 * returns whether or not the given elm has the class name provided
 *
 * @param {Element} elm
 * @param {string} class_name
 * @returns {boolean|undefined}
 */
module.exports = function hasClass( elm, class_name ) {
  // validations
  if ( typeof class_name !== 'string' ) {
    console.warn( 'hasClass( ' + elm + ', ' +  class_name + ' ): class name not provided as a string' );
    return;
  }

  if ( elm.classList ) {
    return elm.classList.contains( class_name );
  }

  return new RegExp( '(^|\\s)' + class_name + '($|\\s)' ).test( elm.className );
};
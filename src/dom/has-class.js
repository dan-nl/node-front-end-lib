'use strict';

/**
 * returns whether or not the given elm has the class name provided
 *
 * @param {HTMLElement} elm
 * @param {string} class_name
 * @returns {boolean|undefined}
 */
module.exports = function hasClass( elm, class_name ) {
  // validations
  if ( !elm || elm.constructor.toString().indexOf( 'HTML' ) < 0 ) {
    console.warn( 'hasClass( ' + elm + ', ' +  class_name + ' ): elm not provided as an HTMLElement' );
    return;
  }

  if ( typeof class_name !== 'string' ) {
    console.warn( 'hasClass( ' + elm + ', ' +  class_name + ' ): class name not provided as a string' );
    return;
  }

  if ( elm.classList ) {
    return elm.classList.contains( class_name );
  }

  return new RegExp( '(^|\\s)' + class_name + '($|\\s)' ).test( elm.className );
};
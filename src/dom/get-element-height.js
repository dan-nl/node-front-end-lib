'use strict';

/**
 * module variables
 */
var getBoundingClientRect;

/**
 * variable assignment
 */
getBoundingClientRect = require( './get-bounding-client-rect' );

/**
 * @param {HTMLElement} elm
 * @returns {number}
 */
function useComputedStyle( elm ) {
  var computed_style;
  var result;

  computed_style = window.getComputedStyle( elm, null );

  result = parseInt( computed_style.getPropertyValue( 'margin-top' ), 10 );
  result += parseInt( computed_style.getPropertyValue( 'border-top-width' ), 10 );
  result += parseInt( computed_style.getPropertyValue( 'padding-top' ), 10 );
  result += parseInt( computed_style.getPropertyValue( 'height' ), 10 );
  result += parseInt( computed_style.getPropertyValue( 'padding-bottom' ), 10 );
  result += parseInt( computed_style.getPropertyValue( 'border-bottom-width' ), 10 );
  result += parseInt( computed_style.getPropertyValue( 'margin-bottom' ), 10 );

  return result;
}

/**
 * @param {HTMLElement} elm
 * @returns {number}
 */
function useBoundingClientRect( elm ) {
  var bounding_client_rect;

  bounding_client_rect = getBoundingClientRect( elm );

  return Math.ceil(
    Math.max(
      bounding_client_rect.height,
      elm.clientHeight,
      elm.scrollHeight
    )
  );
}

/**
 * returns the height, in pixels, of the elm provided. remember to add the string 'px' to the value returned when using it in a `elm.style.x =` statement
 *
 * @param {HTMLElement} elm
 * @returns {number}
 */
module.exports = function getElementHeight( elm ) {
  var error;

  // validations
  if ( !elm || elm.constructor.toString().indexOf( 'HTML' ) === -1 ) {
    console.warn( 'getElementHeight( ' + elm + ' ): elm not provided as an HTMLElement' );
    error = new Error( 'stack trace' );
    console.warn( error.stack );
    return 0;
  }

  if ( !( window.getComputedStyle instanceof Function ) ) {
    return useBoundingClientRect( elm );
  }

  return useComputedStyle( elm );
};

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
 * returns the height, in pixels, of the elm provided. remember to add the string 'px' to the value returned when using it in a `elm.style.x =` statement
 *
 * @param {HTMLElement} elm
 * @returns {number|undefined}
 */
module.exports = function getElementHeight( elm ) {
  var bounding_client_rect;

  // validations
  if ( !elm || elm.constructor.toString().indexOf( 'HTML' ) === -1 ) {
    console.warn( 'getElementHeight( ' + elm + ' ): elm not provided as an HTMLElement' );
    return;
  }

  bounding_client_rect = getBoundingClientRect( elm );

  return Math.ceil(
    Math.max(
      bounding_client_rect.height,
      elm.clientHeight,
      elm.scrollHeight
    )
  );
};
'use strict';

/**
 * module variables
 * @private
 */
var getBoundingClientRect;

/**
 * variable assignment
 */
getBoundingClientRect = require( './get-bounding-client-rect' );

/**
 * @public
 * @param {Object} elm
 * @returns {undefined|number}
 */
function getElementHeight( elm ) {
  var bounding_client_rect;

  // validations
  if ( !elm || elm.constructor.toString().indexOf( 'HTML' ) < 0 ) {
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
}

module.exports = getElementHeight;
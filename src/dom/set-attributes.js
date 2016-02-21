'use strict';

/**
 * will set attributes for the element if an array of attribute objects is provided.
 * an attribute object is expected to contain a key and a value representing the attribute.
 *
 * @param {HTMLElement} elm
 * @param {Array} attributes
 */
module.exports = function setAttributes( elm, attributes ) {
  var attribute;
  var i;

  if ( !elm || elm.constructor.toString().indexOf( 'HTML' ) === -1 ) {
    console.warn( 'setAttributes( ' + elm + ', ' + attributes + ' ): elm not provided as an HTMLElement' );
    return;
  }

  if ( !( attributes instanceof Array ) ) {
    return;
  }

  for ( i = 0; i < attributes.length; i += 1 ) {
    attribute = attributes[ i ];
    elm.setAttribute( attribute.key, attribute.value );
  }
};
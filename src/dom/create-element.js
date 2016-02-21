'use strict';

/**
 * module variables
 */
var setAttributes;

/**
 * variable assignments
 */
setAttributes = require( './set-attributes' );

/**
 * creates a dom element based on the tag_name provided.
 *
 * will also set attributes for the element if an array of attribute objects is provided.
 * an attribute object is expected to contain a key and a value representing the attribute.
 *
 * @param {string} tag_name
 * @param {Array} attributes
 * @returns {HTMLElement|undefined}
 */
module.exports = function addElement( tag_name, attributes ) {
  var elm;

  if ( typeof tag_name !== 'string' ) {
    console.warn( 'addElement( ' + tag_name + ', ' + attributes + ' ): tag name not provided as a string' );
    return;
  }

  elm = document.createElement( tag_name );
  setAttributes( elm, attributes );
  return elm;
};
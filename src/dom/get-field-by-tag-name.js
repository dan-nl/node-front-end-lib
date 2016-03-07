'use strict';

/**
 * returns an html element, or collection of elements, that match the given tag name
 *
 * @param {string} tag_name
 * @param {boolean} [return_collection = false]
 * @returns {HTMLElement|HTMLCollection|undefined}
 */
module.exports = function getFieldByTagName( tag_name, return_collection ) {
  var fields;

  if ( typeof tag_name !== 'string' ) {
    console.warn( 'getFieldByTagName( ' + tag_name + ' ): name not provided as  string' );
    return;
  }

  if ( typeof return_collection !== 'boolean' ) {
    return_collection = false;
  }

  fields = document.getElementsByTagName( tag_name );

  if ( !fields || fields.length < 1 ) {
    console.warn( 'getFieldByTagName( ' + tag_name + ' ): tag name does not exist' );
    return;
  }

  if ( !return_collection ) {
    fields = fields[ 0 ];
  }

  return fields;
};
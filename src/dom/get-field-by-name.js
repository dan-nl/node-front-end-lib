'use strict';

/**
 * returns an html element, or collection of elements, that match the given name
 *
 * @public
 * @param {string} name
 * @param {boolean} [return_collection = false ]
 * @returns {HTMLElement|HTMLCollection|undefined}
 */
function getFieldByName( name, return_collection ) {
  var fields;

  if ( typeof name !== 'string' ) {
    console.warn( 'getFieldByName( ' + name + ' ): name not provided as  string' );
    return;
  }

  if ( typeof return_collection !== 'boolean' ) {
    return_collection = false;
  }

  fields = document.getElementsByName( name );

  if ( !fields || fields.length < 1 ) {
    console.warn( 'getFieldByName( ' + name + ' ): field name does not exist' );
    return;
  }

  if ( !return_collection ) {
    fields = fields[ 0 ];
  }

  return fields;
}

module.exports = getFieldByName;
'use strict';

/**
 * @param {string} name
 * @returns {*}
 */
function getFieldByName( name ) {
  var field;

  if ( typeof name !== 'string' ) {
    console.warn( 'getFieldByName( ' + name + ' ): name not provided as  string' );
    return;
  }

  field = document.getElementsByName( name );

  if ( !field || field.length !== 1 ) {
    console.warn( 'getFieldByName( ' + name + ' ): field name does not exist' );
    return;
  }

  field = field[ 0 ];
  return field;
}

module.exports = getFieldByName;
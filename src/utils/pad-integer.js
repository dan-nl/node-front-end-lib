'use strict';

/**
 * prefixes a given number with 0’s, or padding, if given, in order to satisfy the string length given
 *
 * @param {number} number
 * @param {number} length
 * @param {string} padding
 * @returns string
 */
function padInteger( number, length, padding ) {
  var result;

  result = '';

  if ( typeof number !== 'number' || isNaN( number ) ) {
    console.error( 'number not provided as a number' );
    return result;
  }

  if ( typeof length !== 'number' || isNaN( length ) ) {
    console.error( 'length not provided as a number' );
    return result;
  }

  if ( padding && typeof padding !== 'string' ) {
    console.error( 'padding not provided as a string' );
    return result;
  }

  padding = padding || 0;
  result += number;

  while ( result.length < length ) {
    result = padding + result;
  }

  return result;
}

module.exports = padInteger;
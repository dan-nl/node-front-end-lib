'use strict';

/**
 * module variables
 * @private
 */
var elm_original;

/**
 * finds an html element sibling, of the elm provided, that has the tag name given
 *
 * @public
 * @param {HTMLElement} elm
 * @param {string} tag_name
 * @returns {HTMLElement|undefined}
 */
module.exports = function findPreviousSiblingWithTagName( elm, tag_name ) {
  var result;

  // validations
  if ( !elm || elm.constructor.toString().indexOf( 'HTML' ) < 0 ) {
    console.error( 'findPreviousSiblingWithTagName( ' + elm + ', ' + tag_name + ' ): elm not provided as a valid object' );
    return;
  }

  if ( typeof tag_name !== 'string' ) {
    console.warn( 'findPreviousSiblingWithTagName( ' + elm + ', ' + tag_name + ' ): tag name not provided as a string' );
    return;
  }

  if ( !elm_original ) {
    elm_original = elm;
  }

  tag_name = tag_name.toUpperCase();

  if ( elm.tagName ) {
    while ( ( elm = elm.previousSibling ) && elm.tagName !== tag_name ) {}
  }

  if ( elm && elm.tagName === tag_name ) {
    result = elm;
  }

  if ( !result ) {
    console.warn( 'findPreviousSiblingWithTagName( ' + elm_original + ', ' + tag_name + ' ): could not find previous sibling with tag name; see next console line for elm' );
    console.log( elm_original );
  }

  return result;
};
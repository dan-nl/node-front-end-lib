'use strict';

/**
 * module variables
 */
var elm_original;

/**
 * finds an html element sibling, of the elm provided, that has the tag name given
 *
 * @param {HTMLElement} elm
 * @param {HTMLElement} elm.nextSibling
 *
 * @param {string} tag_name
 * @returns {HTMLElement|undefined}
 */
module.exports = function findNextSiblingWithTagName( elm, tag_name ) {
  var result;

  // validations
  if ( !elm || elm.constructor.toString().indexOf( 'HTML' ) === -1 ) {
    console.error( 'findNextSiblingWithTagName( ' + elm + ', ' + tag_name + ' ): elm not provided as a valid object' );
    return;
  }

  if ( typeof tag_name !== 'string' ) {
    console.warn( 'findNextSiblingWithTagName( ' + elm + ', ' + tag_name + ' ): tag name not provided as a string' );
    return;
  }

  if ( !elm_original ) {
    elm_original = elm;
  }

  tag_name = tag_name.toUpperCase();

  if ( elm.tagName ) {
    while ( ( elm = elm.nextSibling ) && elm.tagName !== tag_name ) {}
  }

  if ( elm && elm.tagName === tag_name ) {
    result = elm;
  }

  if ( !result ) {
    console.warn( 'findNextSiblingWithTagName( ' + elm_original + ', ' + tag_name + ' ): could not find next sibling with tag name; see next console line for elm' );
    console.log( elm_original );
  }

  return result;
};
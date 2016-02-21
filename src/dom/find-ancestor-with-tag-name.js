'use strict';

/**
 * module variables
 */
var elm_original;

/**
 * finds an html element ancestor, of the elm provided, that has the tag name given
 *
 * @param {HTMLElement} elm
 * @param {HTMLElement} elm.parentElement
 * @param {HTMLElement} elm.parentNode
 *
 * @param {string} tag_name
 * @returns {HTMLElement|undefined}
 */
module.exports = function findAncestorWithTagName( elm, tag_name ) {
  var result;

  // validations
  if ( !elm || elm.constructor.toString().indexOf( 'HTML' ) < 0 ) {
    console.error( 'findAncestorWithTagName( ' + elm + ', ' + tag_name + ' ): elm not provided as a valid object' );
    return;
  }

  if ( typeof tag_name !== 'string' ) {
    console.warn( 'findAncestorWithTagName( ' + elm + ', ' + tag_name + ' ): tag name not provided as a string' );
    return;
  }

  if ( !elm_original ) {
    elm_original = elm;
  }

  tag_name = tag_name.toUpperCase();

  // DOM 4
  if ( elm.parentElement ) {
    while ( ( elm = elm.parentElement ) && elm.tagName !== tag_name ) {}

    // DOM 2, DOM 3
  } else if ( elm.parentNode ) {
    while ( ( elm = elm.parentNode ) && elm.tagName !== tag_name ) {}
  }

  if ( elm && elm.tagName === tag_name ) {
    result = elm;
  }

  if ( !result ) {
    console.warn( 'findAncestorWithTagName( ' + elm_original + ', ' + tag_name + ' ): could not find ancestor with tag name; see next console line for elm' );
    console.log( elm_original );
  }

  return result;
};
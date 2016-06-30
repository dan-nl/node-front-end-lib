'use strict';

/**
 * module variables
 */
var elm_original;
var hasClass;

/**
 * variable assignment
 */
hasClass = require( './has-class' );

/**
 * finds an html element sibling, of the elm provided, that has the class name given
 *
 * @param {HTMLElement} elm
 * @param {HTMLElement} elm.nextSibling
 *
 * @param {string} class_name
 * @returns {HTMLElement|undefined}
 */
module.exports = function findNextSiblingWithClass( elm, class_name ) {
  var result;

  // validations
  if ( !elm || elm.constructor.toString().indexOf( 'HTML' ) === -1 ) {
    console.error( 'findNextSiblingWithClass( ' + elm + ', ' + class_name + ' ): elm not provided as a valid object' );
    return;
  }

  if ( typeof class_name !== 'string' ) {
    console.warn( 'findNextSiblingWithClass( ' + elm + ', ' + class_name + ' ): class name not provided as a string' );
    return;
  }

  if ( !elm_original ) {
    elm_original = elm;
  }

  if ( elm.nextSibling ) {
    while ( ( elm = elm.nextSibling ) && !hasClass( elm, class_name ) ) {}
  }

  if ( elm && hasClass( elm, class_name ) ) {
    result = elm;
  }

  if ( !result ) {
    console.warn( 'findNextSiblingWithClass( ' + elm_original + ', ' + class_name + ' ): could not find next sibling with class name; see next console line for elm' );
    console.log( elm_original );
  }

  return result;
};
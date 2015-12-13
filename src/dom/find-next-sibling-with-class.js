'use strict';

/**
 * module variables
 * @private
 */
var elm_original;
var hasClass;

/**
 * variable assignment
 */
hasClass = require( './has-class' );

/**
 * findNextSiblingWithClass
 *
 * @private
 * @param {Object} elm
 * @param {string} class_name
 * @returns {*}
 */
function findNextSiblingWithClass( elm, class_name ) {
  var result;

  // validations
  if ( !elm || elm.constructor.toString().indexOf( 'HTML' ) < 0 ) {
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

  if ( hasClass( elm, class_name ) ) {
    result = elm;
  }

  if ( !result ) {
    console.warn( 'findNextSiblingWithClass( ' + elm_original + ', ' + class_name + ' ): could not find next sibling with class name; see next console line for elm' );
    console.log( elm_original );
  }

  return result;
}

module.exports = findNextSiblingWithClass;
'use strict';

/**
 * module variables
 */
var elm_original;
var hasClass;

/**
 * variable assignments
 */
hasClass = require( './has-class' );

/**
 * finds an html element ancestor, of the elm provided, that has the class name given
 *
 * @param {HTMLElement} elm
 * @param {HTMLElement} elm.parentElement
 * @param {HTMLElement} elm.parentNode
 *
 * @param {string} class_name
 * @returns {HTMLElement|undefined}
 */
module.exports = function findAncestorWithClass( elm, class_name ) {
  var result;

  // validations
  if ( !elm || elm.constructor.toString().indexOf( 'HTML' ) === -1 ) {
    console.warn( 'findAncestorWithClass( ' + elm + ', ' + class_name + ' ): elm not provided as a valid object' );
    return;
  }

  if ( typeof class_name !== 'string' ) {
    console.warn( 'findAncestorWithClass( ' + elm + ', ' + class_name + ' ): class name not provided as a string' );
    return;
  }

  if ( !elm_original ) {
    elm_original = elm;
  }

  // DOM 4
  if ( elm.parentElement ) {
    while ( ( elm = elm.parentElement ) && !hasClass( elm, class_name ) ) {
    }

    // DOM 2, DOM 3
  } else if ( elm.parentNode ) {
    while ( ( elm = elm.parentNode ) && !hasClass( elm, class_name ) ) {
    }
  }

  if ( hasClass( elm, class_name ) ) {
    result = elm;
  }

  if ( !result ) {
    console.warn( 'findAncestorWithClass( ' + elm_original + ', ' + class_name + ' ): could not find ancestor with class name; see next console line for elm' );
    console.log( elm_original );
  }

  return result;
};
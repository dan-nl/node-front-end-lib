'use strict';

/**
 * module variables
 */
var addClass;
var hasClass;
var removeClass;

/**
 * variable assignments
 */
addClass = require( './add-class' );
hasClass = require( './has-class' );
removeClass = require( './remove-class' );

/**
 * toggles the class given, removes it if it exists, or adds it if it doesn’t exist,
 * on the elm provided, with an optional callback called after the operation has completed
 *
 * @param {HTMLElement} elm
 * @param {string} class_name
 * @param {Function|undefined} [callback]
 */
module.exports = function toggleClass( elm, class_name, callback ) {
  // validations
  if ( !elm || elm.constructor.toString().indexOf( 'HTML' ) === -1 ) {
    console.warn( 'toggleClass( ' + elm + ', ' +  class_name + ', ' + callback + ' ): elm not provided as an HTMLElement' );
    return;
  }

  if ( typeof class_name !== 'string' && !( class_name instanceof Array ) ) {
    console.warn( 'toggleClass( ' + elm + ', ' +  class_name + ', ' + callback + ' ): class name not provided as a string or Array' );
    return;
  }

  if ( hasClass( elm, class_name ) ) {
    removeClass( elm, class_name, callback );
  } else {
    addClass( elm, class_name, callback );
  }
};
'use strict';

/**
 * module variables
 * @private
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
 * @public
 * @param {Object} elm
 * @param {string} class_name
 * @param {Function|undefined} callback
 */
function toggleClass( elm, class_name, callback ) {
  // validations
  if ( !elm || elm.constructor.toString().indexOf( 'HTML' ) < 0 ) {
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
}

module.exports = toggleClass;
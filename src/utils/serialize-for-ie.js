'use strict';

/**
 * @param {HTMLCollection} selects
 * @param {string} result
 * @returns {string}
 */
function processSelects( selects, result ) {
  var i;
  var select;

  for ( i = 0; i < selects.length; i += 1 ) {
    select = selects[ i ];

    if ( result.length > 0 ) {
      result += '&';
    }

    result += select.name + '=' + encodeURIComponent( select.options[ select.selectedIndex ].value );
  }

  return result;
}

/**
 * @param {HTMLCollection} fields
 *
 * @param {string} result
 *
 * @param {Object} options
 * @param {boolean} options.hidden_with_value
 *
 * @returns {string}
 */
function processFields( fields, result, options ) {
  var i;
  var field;

  for ( i = 0; i < fields.length; i += 1 ) {
    field = fields[ i ];

    if ( field.type === 'radio' || field.type === 'checkbox' ) {
      if ( field.checked ) {
        if ( result.length > 0 ) {
          result += '&';
        }

        result += field.name + '=' + encodeURIComponent( field.value );
      }
    } else {
      if ( field.type === 'hidden' && options.hidden_with_value ) {
        if ( field.value.length < 1 ) {
          continue;
        }
      }

      if ( result.length > 0 ) {
        result += '&';
      }

      result += field.name + '=' + encodeURIComponent( field.value );
    }
  }

  return result;
}

/**
 * used to serialize form controls for browsers that do not support form.elements
 *
 * - can be used, for example, in combination with form-serialize; when form-serialize
 *   returns an empty result, use this method to serialize the form elements
 *
 * @param {HTMLFormElement} container
 * @param {Object} options
 * @returns {string}
 */
module.exports = function serializeForIe( container, options ) {
  var inputs;
  var result;
  var selects;
  var textareas;

  result = '';

  inputs = container.getElementsByTagName( 'input' );
  selects = container.getElementsByTagName( 'select' );
  textareas = container.getElementsByTagName( 'textarea' );

  if ( !( options instanceof Object ) ) {
    options = {};
  }

  result = processFields( inputs, result, options );
  result = processSelects( selects, result );
  result = processFields( textareas, result );

  return result;
};

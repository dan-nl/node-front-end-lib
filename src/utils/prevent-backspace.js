'use strict';

/**
 * @param {Event} evt
 */
function handleKeydown( evt ) {
  var src_element;
  var tag_type;

  if ( evt.keyCode !== 8 ) {
    return;
  }

  src_element = evt.srcElement || evt.target;

  if ( !src_element.type ) {
    return;
  }

  tag_type = src_element.type.toUpperCase();

  // tag types that allow backspace; anything else falls to the default
  switch( tag_type ) {
    case 'EMAIL':
      break;

    case 'PASSWORD':
      break;

    case 'SEARCH':
      break;

    case 'TEL':
      break;

    case 'TEXT':
      break;

    case 'TEXTAREA':
      break;

    case 'URL':
      break;

    default:
      evt.preventDefault();
  }
}

/**
 * prevents the backspace key from triggering a history back call to the browser.
 * allows the backspace key to be used in form input fields - uses the tag type
 * to determine which tag types are allowed
 */
module.exports = function preventBackspace() {
  document.addEventListener( 'keydown', handleKeydown );
};
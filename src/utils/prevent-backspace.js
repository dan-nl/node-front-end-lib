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

module.exports = function preventBackspace() {
  document.addEventListener( 'keydown', handleKeydown );
};
'use strict';

function mutateClass( elm, new_value_fn ) {
  if( elm.getAttribute && elm.setAttribute ) {
    elm.setAttribute( 'class', new_value_fn( elm.getAttribute( 'class' ) || '' ) );
  }
}

function addClass( elm, class_name ) {
  mutateClass(
    elm,
    function( existing_value ) {
      return existing_value === '' ? class_name : existing_value + ' ' + class_name;
    }
  );
}

function removeClass( elm, class_name ) {
  mutateClass(
    elm,
    function( existing_value ) {
      return existing_value
        .replace( new RegExp( '(^|\\s)' + class_name + '($|\\s)' ), ' ')
        .replace( /^\s+|\s+$/g, '' );
    }
  );
}

module.exports = {
  addClass: addClass,
  removeClass: removeClass
};

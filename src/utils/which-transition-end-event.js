'use strict';

/**
 * @see https://davidwalsh.name/css-animation-callback
 * @returns {string|undefined}
 */
module.exports = function whichTransitionEndEvent() {
  var t;
  var elm;
  var transitions;

  elm = document.createElement( 'fakeelement' );

  transitions = {
    'transition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'MozTransition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
  };

  for ( t in transitions ) {
    if ( !transitions.hasOwnProperty( t ) ) {
      continue;
    }

    if ( elm.style[ t ] !== undefined ) {
      return transitions[ t ];
    }
  }
};
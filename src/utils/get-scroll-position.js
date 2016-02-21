'use strict';

/**
 * returns the viewport’s current scroll position
 *
 * @returns {{x: number, y: number}}
 */
module.exports = function getScrollPosition() {
  var position = {
    x: 0,
    y: 0
  };

  if ( typeof window.pageYOffset === 'number' ) {
    position.x = parseInt( window.pageXOffset, 10 );
    position.y = parseInt( window.pageYOffset, 10 );
    return position;
  }

  if ( typeof document.documentElement.scrollTop === 'number' ) {
    position.x = parseInt( document.documentElement.scrollTop, 10 );
    position.y = parseInt( document.documentElement.scrollLeft, 10 );
  }

  return position;
};
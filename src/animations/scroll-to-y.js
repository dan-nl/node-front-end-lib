'use strict';

/**
 * module variables
 * @private
 */
var getScrollPosition;

/**
 * variable assignments
 */
getScrollPosition = require( '../utils/get-scroll-position' );

/**
 * @private
 * @param {Object} elm
 */
function fallbackScrollIntoView( elm ) {
  if ( !elm.scrollIntoView ) {
    return;
  }

  elm.scrollIntoView( true );
}

/**
 * scrolls the browser viewport vertically to the elm provided
 *
 * @public
 * @param {HTMLElement} elm
 * @param {number} [duration]
 * @param {Function} [callback]
 */
function scrollToY( elm, duration, callback ) {
  var count;
  var diff_from_current_y;
  var next_position;
  var scroll_interval;
  var scroll_interval_duration;
  var scroll_position;
  var scroll_step;
  var scroll_to_y;
  var scroll_traveled;
  var start;

  // validations
  if ( !elm || elm.constructor.toString().indexOf( 'HTML' ) < 0 ) {
    console.warn( 'scrollToY( ' + elm + ', ' + duration + ', ' + callback + ' ): elm not provided as an HTMLElement' );
    return;
  }

  if ( !( elm.getBoundingClientRect instanceof Function ) ) {
    fallbackScrollIntoView( elm );
    return;
  }

  if ( typeof window.pageYOffset !== 'number' || isNaN( window.pageYOffset ) ) {
    fallbackScrollIntoView( elm );
    return;
  }

  if ( !( window.scrollTo instanceof Function ) ) {
    fallbackScrollIntoView( elm );
    return;
  }

  // setup
  count = 0;
  scroll_interval_duration = 10;
  scroll_traveled = 0;
  scroll_position = getScrollPosition();
  start = scroll_position.y;

  if ( typeof duration !== 'number' || isNaN( duration ) ) {
    duration = 500;
  }

  scroll_to_y = window.pageYOffset + Math.floor( elm.getBoundingClientRect().top );
  diff_from_current_y = scroll_to_y - scroll_position.y;
  scroll_step = Math.PI / ( duration / 10 );

  // validations
  if ( typeof start !== 'number' || isNaN( start ) ) {
    console.warn( 'scrollToY( ' + elm + ', ' + duration + ', ' + callback + ' ): start is not a number' );
    return;
  }

  if ( typeof diff_from_current_y !== 'number' || isNaN( diff_from_current_y ) ) {
    console.warn( 'scrollToY( ' + elm + ', ' + duration + ', ' + callback + ' ): diff_from_current_y is not a number' );
    return;
  }

  if ( typeof scroll_step !== 'number' || isNaN( scroll_step ) ) {
    console.warn( 'scrollToY( ' + elm + ', ' + duration + ', ' + callback + ' ): scroll_step is not a number' );
    return;
  }

  // handle no scroll necessary
  if ( diff_from_current_y === 0 ) {
    if ( callback instanceof Function ) {
      callback();
    }

    return;
  }

  // scrollTo
  scroll_interval = setInterval(
    function () {
      if ( scroll_traveled !== diff_from_current_y ) {
        count = count + 1;
        next_position = start + diff_from_current_y * ( 0.5 - 0.5 * Math.cos( count * scroll_step ) );
        scroll_traveled = next_position - start;

        // chrome can set the scrollTo with document.body.scrollTo =
        // firefox can set the scrollTo with document.documentElement.scrollTo =
        // ie ?
        // problem is that both properties are present, but one works in one browser and the other not in the other
        // window.scrollTo( x, y ) works in chrome and ff - not sure when support started
        window.scrollTo( 0, next_position );
      } else {
        clearInterval( scroll_interval );

        if ( callback instanceof Function ) {
          callback();
        }
      }
    },
    scroll_interval_duration
  );
}

module.exports = scrollToY;
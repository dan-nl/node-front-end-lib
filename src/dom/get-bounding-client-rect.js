'use strict';

/**
 * returns the ClientRect of the elm provided
 *
 * @public
 * @param {HTMLElement} elm
 * @returns {ClientRect|undefined}
 */
function getBoundingClientRect( elm ) {
  var clone;
  var result;

  // validations
  if ( !elm || elm.constructor.toString().indexOf( 'HTML' ) < 0 ) {
    console.warn( 'getBoundingClientRect( ' + elm + ' ): elm not provided as an HTMLElement' );
    return;
  }

  clone = elm.cloneNode( true );

  document.body.appendChild( clone );
  clone.className = '';
  clone.style.position = 'absolute';
  clone.style.top = '-9999px';
  clone.style.display = 'block';

  result = clone.getBoundingClientRect();
  document.body.removeChild( clone );

  return result;
}

module.exports = getBoundingClientRect;
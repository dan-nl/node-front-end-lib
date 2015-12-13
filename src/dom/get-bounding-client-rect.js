'use strict';

/**
 * @public
 * @param {Object} elm
 * @returns {ClientRect|*}
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
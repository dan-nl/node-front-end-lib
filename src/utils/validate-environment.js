'use strict';

/**
 * @returns {boolean}
 */
function checkWindow() {
  if ( !window ) {
    console.error( 'checkWindow(): environment does not know about window' );
    return false;
  }

  if ( !window.JSON ) {
    console.error( 'checkWindow(): environment does not know about window.JSON' );
    return false;
  }

  return true;
}

/**
 * @returns {boolean}
 */
function checkDocument() {
  if ( !document ) {
    console.error( 'checkDocument(): environment does not know about document' );
    return false;
  }

  if ( !document.addEventListener ) {
    console.error( 'checkDocument(): environment does not know about document.addEventListener' );
    return false;
  }

  if ( !document.dispatchEvent ) {
    console.error( 'checkDocument(): environment does not know about document.dispatchEvent()' );
    return false;
  }

  if ( !document.createEvent ) {
    console.error( 'checkDocument(): environment does not know about document.createEvent()' );
    return false;
  }

  return true;
}

/**
 * @returns {boolean}
 */
function checkHtmlElements() {
  /* global HTMLCollection */

  if ( !HTMLElement ) {
    console.error( 'checkHtmlElements(): environment does not know about HTMLElements' );
    return false;
  }

  if ( !HTMLInputElement ) {
    console.error( 'checkHtmlElements(): environment does not know about HTMLInputElements' );
    return false;
  }

  if ( !HTMLButtonElement ) {
    console.error( 'checkHtmlElements(): environment does not know about HTMLButtonElements' );
    return false;
  }

  if ( !HTMLSelectElement ) {
    console.error( 'checkHtmlElements(): environment does not know about HTMLSelectElements' );
    return false;
  }

  if ( !HTMLCollection ) {
    console.error( 'checkHtmlElements(): environment does not know about HTMLCollections' );
    return false;
  }

  return true;
}

/**
 * returns whether or not the front-end environment meets the validations in the method.
 *
 * @returns {boolean}
 */
module.exports = function validateEnvironment() {
  if ( !checkWindow() ) {
    return false;
  }

  if ( !checkDocument() ) {
    return false;
  }

  if ( !checkHtmlElements() ) {
    return false;
  }

  if ( !MouseEvent ) {
    console.error( 'validateEnvironment(): environment does not know about MouseEvents' );
    return false;
  }

  if ( !XMLHttpRequest ) {
    console.error( 'validateEnvironment(): environment does not know about XMLHttpRequests' );
    return false;
  }

  return true;
};
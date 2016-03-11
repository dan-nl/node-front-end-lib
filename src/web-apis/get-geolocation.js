'use strict';

/**
 * module variables
 */
var check_geolocation_count;
var check_geolocation_limit;
var Promise;

/**
 * variable assignments
 */
check_geolocation_count = 0;
check_geolocation_limit = 10; // assuming getCurrentPosition timeout is 3ms
Promise = require( 'bluebird' );

/**
 * handle the following scenarios:
 *
 * - user permission denied to access geolocation
 *   will redirect to google maps without a start destination
 *
 * - geolocation unavailable
 *   will attempt this.check_geolocation.limit times to obtain the geolocation
 *
 * @see http://dev.w3.org/geo/api/spec-source.html#position-error
 *
 * @param {Object} PositionError
 * @param {int} PositionError.code
 * 1 = User denied Geolocation
 *
 * @param {Function} resolve
 *
 * @returns {*}
 */
function handleGeolocationError( PositionError, resolve ) {
  if (
    PositionError.code === 2 &&
    check_geolocation_count <= check_geolocation_limit
  ) {
    return getGeolocation();
  }

  resolve( false );
}

/**
 * @see http://dev.w3.org/geo/api/spec-source.html#coordinates
 *
 * @param {Position} Position
 * @param {float} Position.coords.latitude
 * @param {float} Position.coords.longitude
 *
 * @param {Function} resolve
 *
 * @returns {{lat: number, lon: number}}
 */
function handleGeolocationSuccess( Position, resolve ) {
  resolve( {
    lat: parseFloat( Position.coords.latitude ),
    lon: parseFloat( Position.coords.longitude )
  } );
}

/**
 * @returns {boolean}
 */
function getGeolocationAvailable() {
  return (
    navigator &&
    navigator.geolocation instanceof Object &&
    navigator.geolocation.getCurrentPosition instanceof Function
  );
}

/**
 * resolves with an object { lat: {number}, lon: {number} } or false if geolocation cannot be determined
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
 * @link http://dev.w3.org/geo/api/spec-source.html#get-current-position
 * @link http://dev.w3.org/geo/api/spec-source.html#position-options
 *
 * @returns {Promise}
 */
function getGeolocation() {
  return new Promise(
    /**
     * @param {Function} resolve
     */
    function getGeolocationPromise( resolve ) {
      var geolocation_available;

      geolocation_available = getGeolocationAvailable();

      if ( !geolocation_available ) {
        resolve( false );
      }

      check_geolocation_count += 1;

      // the success and failure callbacks return window as the this object
      // so set it to this object instead
      navigator.geolocation.getCurrentPosition(
        /**
         * @param {Position} Position
         */
        function ( Position ) {
          handleGeolocationSuccess.call( this, Position, resolve );
        },
        /**
         * @param {PositionError} PositionError
         */
        function ( PositionError ) {
          handleGeolocationError.call( this, PositionError, resolve );
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0
        }
      );
    }
  );
}

module.exports = getGeolocation;
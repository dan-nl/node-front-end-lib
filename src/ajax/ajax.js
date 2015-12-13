'use strict';

/**
 * module variables
 * @public
 */
var ajax;

/**
 * module variables
 * @private
 */
var Promise;

/**
 * variables assignemnts
 */
Promise = require( 'bluebird' );

ajax = {
  defaults: {
    'content-type': 'application/x-www-form-urlencoded',
    timeout: ( 7 * 1000 )
  },

  /**
   * @param {string} url
   *
   * @param {undefined|Object} options
   * @param {undefined|Function} options.abort
   * @param {undefined|Function} options.onreadystatechange
   * @param {undefined|Function} options.ontimeout
   * @param {undefined|Function} options.progress
   * @param {undefined|number} options.timeout
   *
   * @returns {undefined|Promise}
   */
  get: function ( url, options ) {
    var xhr;

    if ( typeof url !== 'string' ) {
      console.error( 'ajax.get( ' + url + ', ' + options + ' ): url not provided as a string' );
      return;
    }

    if ( options && !( options instanceof Object ) ) {
      console.warn( 'ajax.get( ' + url + ', ' + options + ' ): options not provided as an Object' );
      return;
    }

    return new Promise( function ( resolve, reject ) {
      xhr = ajax.setupXhr( url, options, resolve, reject );
      xhr.open( "GET", url );
      ajax.setRequestHeaders( xhr, options );
      xhr.send();
    } );
  },

  /**
   * @param {string} url
   *
   * @param {undefined|Object} options
   * @param {undefined|Function} options.abort
   * @param {undefined|string|Object} options.data
   * @param {undefined|Function} options.onreadystatechange
   * @param {undefined|Function} options.ontimeout
   * @param {undefined|Function} options.progress
   * @param {undefined|number} options.timeout
   *
   * @returns {undefined|Promise}
   */
  post: function post( url, options ) {
    var xhr;

    if ( typeof url !== 'string' ) {
      console.warn( 'ajax.post( ' + url + ', ' + options + ' ): url not provided as a string' );
      return;
    }

    if ( options && !( options instanceof Object ) ) {
      console.warn( 'ajax.post( ' + url + ', ' + options + ' ): options not provided as an Object' );
      return;
    }

    return new Promise( function ( resolve, reject ) {
      xhr = ajax.setupXhr( url, options, resolve, reject );
      xhr.open( "POST", url );
      ajax.setRequestHeaders( xhr, options );

      if ( options.data ) {
        xhr.send( options.data );
      } else {
        xhr.send();
      }
    } );
  },

  /**
   * must be set after open, but before send
   * @param xhr
   * @param options
   */
  setRequestHeaders: function setRequestHeaders( xhr, options ) {
    if ( options && options['content-type'] ) {
      if ( options['content-type'].indexOf( 'multipart/form-data' ) !== -1 ) {
        if ( options['content-type'].indexOf( 'boundary' ) !== -1 ) {
          xhr.setRequestHeader( 'Content-Type', options['content-type'] );
        }
      }
    } else {
      xhr.setRequestHeader( 'Content-Type', this.defaults['content-type'] );
    }
  },

  /**
   * @param {string} url
   *
   * @param {undefined|Object} options
   * @param {undefined|Function} options.abort
   * @param {undefined|Function} options.onreadystatechange
   * @param {undefined|Function} options.ontimeout
   * @param {undefined|Function} options.progress
   * @param {undefined|number} options.timeout
   *
   * @param {Function} resolve
   * @param {Function} reject
   * @returns {XMLHttpRequest}
   */
  setupXhr: function setupXhr( url, options, resolve, reject ) {
    var xhr = new XMLHttpRequest();

    /**
     * not needed because the Promise handles:
     *  - success with resolve
     *  - errors with reject
     */
    //xhr.onreadystatechange = function () {
      //if ( xhr.readyState === XMLHttpRequest.DONE ) {
        //if ( xhr.status !== 200 ) {
          //reject( new Error( xhr.status + ' ' + xhr.statusText ) );
        //}
      //}
    //};

    xhr.ontimeout = function () {
      reject( new Error( 'The request for [ ' + url + ' ] timed out.' ) );
    };

    /**
     * ie 9 doesn’t seem to have an xhr.timeout property
     */
    if ( xhr.timeout ) {
      xhr.timeout = this.defaults.timeout;
    }

    xhr.addEventListener( "load", resolve );
    xhr.addEventListener( "error", reject );

    /**
     * options
     */
    if ( !options ) {
      return xhr;
    }

    /**
     * options.onreadystatechange
     */
    if ( options.onreadystatechange instanceof Function ) {
      xhr.onreadystatechange = options.onreadystatechange;
    }

    /**
     * options.timeout
     */
    if ( typeof options.timeout === 'number' && !isNaN( options.timeout ) ) {
      xhr.timeout = options.timeout;
    }

    /**
     * options.ontimeout
     */
    if ( options.ontimeout instanceof Function ) {
      xhr.ontimeout = options.ontimeout;
    }

    /**
     * options.progress
     */
    if ( options.progress instanceof Function ) {
      xhr.addEventListener( "progress", options.progress );
    }

    /**
     * options.abort
     */
    if ( options.abort instanceof Function ) {
      xhr.addEventListener( "abort", options.abort );
    }

    return xhr;
  }
};

module.exports = ajax;
# node-front-end-lib
a simple front-end js library

## ajax
### ajax.get( url, options )
```javascript
@param {string} url
@param {Object} [options]
@param {Function} [options.abort]
@param {string} [options.content-type = application/x-www-form-urlencoded]
@param {Function} [options.onreadystatechange]
@param {Function} [options.ontimeout]
@param {Function} [options.progress]
@param {number} [options.timeout = 7000] in milliseconds
@returns {Promise|undefined}
```

### ajax.post( url, options )
```javascript
@param {string} url
@param {Object} [options]
@param {Function} [options.abort]
@param {string} [options.content-type = application/x-www-form-urlencoded]
@param {string|Object} [options.data]
@param {Function} [options.onreadystatechange]
@param {Function} [options.ontimeout]
@param {Function} [options.progress]
@param {number} [options.timeout = 7000] in milliseconds
@returns {Promise|undefined}
```

### extractXhrResponse( xhr )
attempts to extract a response from an XMLHttpRequestProgressEvent
```javascript
@param {Object} xhr
@throws {Error}
@returns {string|undefined}
```

## animations
### scrollToY( elm, duration, offset, callback )
scrolls the browser viewport vertically to the elm provided
```javascript
@param {HTMLElement} elm
@param {number} [duration = 500] in milliseconds
@param {number} [offset]
@param {Function} [callback]
```

## dom
### addClass( elm, class_name, callback )
adds the class, or classes, given, to the elm provided, with an optional callback called after the operation has completed
```javascript
@param {HTMLElement} elm
@param {string|Array} class_name
@param {Function} [callback]
```

### createElement( tag_name, attributes )
creates a dom element based on the tag_name provided. will also set attributes for the element if an array of attribute objects is provided. an attribute object is expected to contain a key and a value representing the attribute.
```javascript
@param {string} tag_name
@param {Array} attributes
@returns {HTMLElement|undefined}
```

### findAncestorWithClass( elm, class_name )
finds an html element ancestor, of the elm provided, that has the class name given
```javascript
@param {HTMLElement} elm
@param {string} class_name
@returns {HTMLElement|undefined}
```
### findAncestorWithTagName( elm, tag_name )
finds an html element ancestor, of the elm provided, that has the tag name given
```javascript
@param {HTMLElement} elm
@param {string} tag_name
@returns {HTMLElement|undefined}
```

### findNextSiblingWithClass( elm, class_name )
finds an html element sibling, of the elm provided, that has the class name given
```javascript
@param {HTMLElement} elm
@param {string} class_name
@returns {HTMLElement|undefined}
```

### findNextSiblingWithTagName( elm, tag_name )
finds an html element sibling, of the elm provided, that has the tag name given
```javascript
@param {HTMLElement} elm
@param {string} tag_name
@returns {HTMLElement|undefined}
```

### findPreviousSiblingWithClass( elm, class_name )
finds an html element sibling, of the elm provided, that has the class name given
```javascript
@param {HTMLElement} elm
@param {string} class_name
@returns {HTMLElement|undefined}
```

### findPreviousSiblingWithTagName( elm, tag_name )
finds an html element sibling, of the elm provided, that has the tag name given
```javascript
@param {HTMLElement} elm
@param {string} tag_name
@returns {HTMLElement|undefined}
```

### getBoundingClientRect( elm )
returns the ClientRect of the elm provided
```javascript
@param {HTMLElement} elm
@returns {ClientRect|undefined}
```

### getElementHeight( elm )
returns the height, in pixels, of the elm provided. remember to add the string 'px' to the value returned when using it in a `elm.style.x =` statement
```javascript
@param {HTMLElement} elm
@returns {number|undefined}
```

### getFieldByName( name )
returns an html element, or collection of elements, that match the given name
```javascript
@param {string} name
@param {boolean} [return_collection = false]
@returns {HTMLElement|HTMLCollection|undefined}
```

### getFieldByTagName( tag_name )
returns an html element, or collection of elements, that match the given tag name
```javascript
@param {string} tag_name
@param {boolean} [return_collection = false]
@returns {HTMLElement|HTMLCollection|undefined}
```

### hasClass( elm, class_name )
returns whether or not the given elm has the class name provided
```javascript
@param {HTMLElement} elm
@param {string} class_name
@returns {boolean|undefined}
```

### removeClass( elm, class_name, callback )
removes the class, or classes, given, from the elm provided, with an optional callback called after the operation has completed
```javascript
@param {HTMLElement} elm
@param {string|Array} class_name
@param {Function} [callback]
```

### setAttributes( elm, attributes )
will set attributes for the element if an array of attribute objects is provided. an attribute object is expected to contain a key and a value representing the attribute.
```javascript
@param {string} tag_name
@param {Array} attributes
@returns {HTMLElement|undefined}
```

### toggleClass( elm, class_name, callback )
toggles the class given, removes it if it exists, or adds it if it doesn’t exist, on the elm provided, with an optional callback called after the operation has completed
```javascript
@param {HTMLElement} elm
@param {string|Array} class_name
@param {Function} [callback]
```
## polyfills
### addCustomEvent()
### getWindowLocationOrigin()

## utils
### addCallback( callback, callbacks )
adds a callback to a given array of callbacks. ensures that the callback is a function and that the callbacks are an array.
``` javascript
@param {Function} callback
@param {Array} callbacks
```

### callCallbacks( callbacks )
given an array of callbacks, calls each one using the apply method, passing in any arguments provided less the initial array of callbacks
``` javascript
@param {Array} callbacks
```

### checkConditionOnInterval( condition, interval_delay, interval_max )
using setInterval(), checks for the given condition, which should be a function that returns a truthy or falsy result.
``` javascript
@param {Function} condition
@param {number} [interval_delay]
@param {number} [interval_max]
@returns {Promise}
```

### debounce( func, wait, immediate )
@see [https://davidwalsh.name/javascript-debounce-function](https://davidwalsh.name/javascript-debounce-function)

returns a function, that, as long as it continues to be invoked, will not be triggered. the function will be called after it stops being called for N milliseconds. if `immediate` is passed, trigger the function on the leading edge, instead of the trailing.
```javascript
@param {Function} func
@param {number} wait
@param {boolean} immediate
@returns {Function}
```

### getScrollPosition()
returns the viewport’s current scroll position
```javascript
@returns {x: number, y: number}
```

### objectPropertyExists( obj )
tests whether or not an object property exists; does not search the object prototype.
```javascript
@example
objectPropertyExists( window, 'location', 'href' );

@param {Object} obj
@param {string} [property-name, property-name, ...]
@returns {bool}
```

### padInteger( number, length, padding )
prefixes a given number with 0’s, or padding, if given, in order to satisfy the string length given
```javascript
@param {number} number
@param {number} length
@param {string} [padding = '0']
@returns {string}
```

### preventBackspace()
prevents the backspace key from triggering a history back call to the browser. allows the backspace key to be used in form input fields with the type:
* email
* password
* search
* tel
* text
* textarea
* url

### touchEventsExist()
determine whether or not the browsing environment supports touch events
```javascript
@returns {boolean}
```

### triggerEvent( event_name, event_type, elm )
```javascript
@param {string} event_name
@param {string} event_type
@param {HTMLElement} elm
```

### validateEnvironment()
returns whether or not the front-end environment meets the validations in the method.
```javascript
@returns {boolean}
```

### whichTransitionEndEvent()
returns the transitionend event listener name that can be used in the current environment.
```javascript
@returns {string|undefined}
```

### windowResize( callback )
registers the callback with a universal window onresize event listener, which is called via a debounce function that is set with a hard coded timeout of 400 milliseconds
```javascript
@param {Function} callback
```

## web apis
### getGeolocation()
resolves with an object { lat: {number}, lon: {number} } or false if geolocation cannot be determined
```javascript
@returns {Promise}
```
# node-front-end-lib
front-end js library

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

## animations
### scrollToY( elm, duration, callback )
scrolls the browser viewport vertically to the elm provided
```javascript
@param {HTMLElement} elm
@param {number} [duration = 500] in milliseconds
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
@param {boolean} [return_collection = false ]
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

### toggleClass( elm, class_name, callback )
toggles the class given, removes it if it exists, or adds it if it doesn’t exist, on the elm provided, with an optional callback called after the operation has completed
```javascript
@param {HTMLElement} elm
@param {string|Array} class_name
@param {Function} [callback]
```

## utils
### function getScrollPosition()
returns the viewport’s current scroll position
```javascript
@returns {x: number, y: number}
```

### padInteger( number, length, padding )
prefixes a given number with 0’s, or padding, if given, in order to satisfy the string length given
```javascript
@param {number} number
@param {number} length
@param {string} [padding]
@returns {string}
```

### validateEnvironment()
returns whether or not the front-end environment meets the validations in the method.
```javascript
@returns {boolean}
```
'use strict';

/**
 * module variables
 */
var lib;

/**
 * variable assignments
 */
lib = {};

// utils
lib.debounce = require( './src/utils/debounce' );
lib.getScrollPosition = require( './src/utils/get-scroll-position' );
lib.objectPropertyExists = require( './src/utils/object-property-exists' );
lib.padInteger = require( './src/utils/pad-integer' );
lib.preventBackspace = require( './src/utils/prevent-backspace' );
lib.validateEnvironment = require( './src/utils/validate-environment' );
lib.whichTransitionEndEvent = require( './src/utils/which-transition-end-event' );
lib.windowResize = require( './src/utils/window-resize' );

// dom
lib.addClass = require( './src/dom/add-class' );
lib.findAncestorWithClass = require( './src/dom/find-ancestor-with-class' );
lib.findAncestorWithTagName = require( './src/dom/find-ancestor-with-tag-name' );
lib.findNextSiblingWithClass = require( './src/dom/find-next-sibling-with-class' );
lib.getBoundingClientRect = require( './src/dom/get-bounding-client-rect' );
lib.getElementHeight = require( './src/dom/get-element-height' );
lib.getFieldByName = require( './src/dom/get-field-by-name' );
lib.hasClass = require( './src/dom/has-class' );
lib.removeClass = require( './src/dom/remove-class' );
lib.toggleClass = require( './src/dom/toggle-class' );

// ajax
lib.ajax = require( './src/ajax/ajax' );
lib.extractXhrResponse = require( './src/ajax/extract-xhr-response' );

// animations
lib.scrollToY = require( './src/animations/scroll-to-y' );

module.exports = lib;
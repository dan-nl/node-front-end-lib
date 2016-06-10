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
lib.addCallback = require( './src/utils/add-callback' );
lib.bindEventData = require( './src/utils/bind-event-data' );
lib.callCallbacks = require( './src/utils/call-callbacks' );
lib.checkConditionOnInterval = require( './src/utils/check-condition-on-interval' );
lib.debounce = require( './src/utils/debounce' );
lib.getScrollPosition = require( './src/utils/get-scroll-position' );
lib.objectPropertyExists = require( './src/utils/object-property-exists' );
lib.padInteger = require( './src/utils/pad-integer' );
lib.preventBackspace = require( './src/utils/prevent-backspace' );
lib.serializeForIe = require( './src/utils/serialize-for-ie' );
lib.touchEventsExist = require( './src/utils/touch-events-exist' );
lib.triggerEvent = require( './src/utils/trigger-event' );
lib.validateEnvironment = require( './src/utils/validate-environment' );
lib.whichTransitionEndEvent = require( './src/utils/which-transition-end-event' );
lib.windowResize = require( './src/utils/window-resize' );

// dom
lib.addClass = require( './src/dom/add-class' );
lib.createElement = require( './src/dom/create-element' );
lib.findAncestorWithClass = require( './src/dom/find-ancestor-with-class' );
lib.findAncestorWithTagName = require( './src/dom/find-ancestor-with-tag-name' );
lib.findNextSiblingWithClass = require( './src/dom/find-next-sibling-with-class' );
lib.findNextSiblingWithTagName = require( './src/dom/find-next-sibling-with-tag-name' );
lib.findPreviousSiblingWithClass = require( './src/dom/find-previous-sibling-with-class' );
lib.findPreviousSiblingWithTagName = require( './src/dom/find-previous-sibling-with-tag-name' );
lib.getBoundingClientRect = require( './src/dom/get-bounding-client-rect' );
lib.getElementHeight = require( './src/dom/get-element-height' );
lib.getFieldByName = require( './src/dom/get-field-by-name' );
lib.getFieldByTagName = require( './src/dom/get-field-by-tag-name' );
lib.hasClass = require( './src/dom/has-class' );
lib.removeClass = require( './src/dom/remove-class' );
lib.setAttributes = require( './src/dom/set-attributes' );
lib.toggleClass = require( './src/dom/toggle-class' );

// ajax
lib.ajax = require( './src/ajax/ajax' );
lib.extractXhrResponse = require( './src/ajax/extract-xhr-response' );

// animations
lib.scrollToY = require( './src/animations/scroll-to-y' );

// polyfills
lib.addCustomEvent = require( './src/polyfills/add-custom-event' );
lib.getWindowLocationOrigin = require( './src/polyfills/window-location-origin' );

// web apis
lib.getGeolocation = require( './src/web-apis/get-geolocation' );

module.exports = lib;

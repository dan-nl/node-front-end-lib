'use strict';

/**
 * module variables
 */
var padInteger;

/**
 * module dependencies
 */
padInteger = require( '../../src/utils/pad-integer' );

describe( 'padInteger( number, length, padding )', function () {
  var test;

  it( 'should console.error() when the number parameter is not a number', function () {
    spyOn( console, 'error' );
    test = padInteger();
    expect( console.error ).toHaveBeenCalledWith( 'number not provided as a number' );
  } );

  it( 'should console.error() when the length parameter is not a number', function () {
    spyOn( console, 'error' );
    test = padInteger( 3 );
    expect( console.error ).toHaveBeenCalledWith( 'length not provided as a number' );
  } );

  it( 'should console.error() when padding is provided and is not a string', function () {
    spyOn( console, 'error' );
    test = padInteger( 3, 3, 3 );
    expect( console.error ).toHaveBeenCalledWith( 'padding not provided as a string' );
  } );

  it( 'should return a string', function () {
    test = padInteger( 3, 3 );
    expect( typeof test ).toEqual( 'string' );
  } );

  it( 'should return a string padded with 0’s in order to meet the length parameter', function () {
    test = padInteger( 3, 3 );
    expect( test ).toEqual( '003' );
  } );

  it( 'should return a string padded with the padding parameter in order to meet the length parameter', function () {
    test = padInteger( 3, 3, 'x' );
    expect( test ).toEqual( 'xx3' );
  } );
} );
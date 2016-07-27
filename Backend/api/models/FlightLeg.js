/**
 * FlightLeg.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    arrivalAirport: {
      type: 'string'
    },
    departureAirport: {
      type: 'string'
    },
    onGround: {
      type: 'datetime'
    },
    offGround: {
      type: 'datetime'
    },
    onRamp: {
      type: 'datetime'
    },
    offRamp: {
      type: 'datetime'
    },
    flightNumber: {
      type: 'string'
    }
  }
};

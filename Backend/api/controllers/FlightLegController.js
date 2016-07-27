/**
 * FlightLegController
 *
 * @description :: Server-side logic for managing Flightlegs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var request = require('request');
module.exports = {

  list: function(req, res){
    request('http://fids.kefairport.is/api/flights', function(err, resp, body){
      if(err) {
        sails.log.error('Err: ' + err);
        res.view({
          flights: [],
          err: 'Error getting flights'
        });
      }
      var flights = JSON.parse(body);
      res.view({
        flights: flights
      });
    });
  }
};

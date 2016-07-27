/**
 * AircraftController
 *
 * @description :: Server-side logic for managing Aircrafts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  list: function(req, res){

    Aircraft.find().exec(function(err, aircrafts){
      if(err) {
        res.json(err);
      }

      res.view({
        aircrafts: aircrafts,
      });
    });
  }

};

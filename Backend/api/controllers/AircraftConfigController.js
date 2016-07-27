/**
 * AircraftConfigController
 *
 * @description :: Server-side logic for managing Aircraftconfigs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  list: function(req, res){
    AircraftConfig.find().exec(function(err, aircraftconfigs){
      if(err){
        res.json(err);
      }

      res.view({
        aircraftconfigs: aircraftconfigs
      });
    });
  }

};

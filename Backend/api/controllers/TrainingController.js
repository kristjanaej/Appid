/**
 * TrainingController
 *
 * @description :: Server-side logic for managing Trainings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  list: function(req, res){
    Training.find().exec(function(err, trainings){
      if(err){
        res.json(err);
      }
      res.view({
        trainings: trainings
      });
    });
  }
};

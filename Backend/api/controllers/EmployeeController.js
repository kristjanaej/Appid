/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing Employees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  list: function(req, res){
    Employee.find().exec(function(err, employees){
      if(err){
        res.json(err);
      }

      res.view({
        employees: employees
      });
    });
  }
};

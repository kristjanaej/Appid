/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // EJS Filters
  _.extend(sails.hooks.http.app.locals, sails.config.http.locals);

  // Demo data
  var employees = [{
      email: "jon@gmail.com",
      kt: "1205564289",
      name: "Jón",
      phone: "5482589",
      username: "jon4289"
    },{
      email: "eirikur@gmail.com",
      kt: "1306672569",
      name: "Eiríkur",
      phone: "6982514",
      username: "eirikur2569"
    },{
      email: "helgi@gmail.com",
      kt: "1407783579",
      name: "Helgi",
      phone: "8982653",
      username: "helgi3579"
    }];

  Employee.create(employees).exec(function(err, emp){
    if(err) sails.log.error('Error creating demo data: ' + err);
    sails.log.info('Created: ' + emp.length + ' employees');

    cb();
  });
};

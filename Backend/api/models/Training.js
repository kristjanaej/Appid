/**
 * Training.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    courseName: {
      type: 'string'
    },
    teacher: {
      type: 'string'
    },
    location: {
      type: 'string'
    },
    validForDays: {
      type: 'integer'
    },
    employeeTraining: {
      model: 'EmployeeTraining'
    }
  }
};

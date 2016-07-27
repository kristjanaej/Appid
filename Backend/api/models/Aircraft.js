/**
 * Aircraft.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    tailNumber: {
       type: 'string'
     },
     status: {
       type: 'string'
     },
     type: {
       type: 'string'
     },
     location: {
       type: 'string'
     },
     condition: {
       type: 'string'
     },
     arrived: {
       type: 'datetime'
     },
     name: {
       type: 'string'
     },
     etops: {
       type: 'string'
     },
     cockpit: {
       type: 'string'
     },
     lighting: {
       type: 'string'
     },
     ife: {
       type: 'string'
     },
     wifi: {
       type: 'string'
     },
  }
};

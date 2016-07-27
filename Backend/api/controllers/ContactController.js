/**
 * ContactController
 *
 * @description :: Server-side logic for managing Contacts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  list: function(req,res){

    Contact.find().exec(function(err, contacts){
      if(err) {
        res.json(err);
      }
      res.view({
        contacts: contacts
      });
    });
  }
};

angular.module('app.services', [])

.factory('BlankFactory', [function() {

  }])
.service('LoginService', function($q) {
  var loggedInUser = {};

  return {
    loginUser: function(user, pass) {
      var deferred = $q.defer();
      var promise = deferred.promise;

      if (user == 'demo' && pass == 'demo') {
        deferred.resolve('Welcome ' + user + '!');
        loggedInUser.name = 'Demo User';
        loggedInUser.email = 'demo@demo.com';
      } else {
        deferred.reject('Wrong credentials.');
      }
      promise.success = function(fn) {
        promise.then(fn);
        return promise;
      };
      promise.error = function(fn) {
        promise.then(null, fn);
        return promise;
      };
      return promise;
    },
    loggedInUser: function(){
    	return loggedInUser;
    }
  };
})

.service('EmployeeService', function() {
})

.service('BlankService', [function() {

}]);

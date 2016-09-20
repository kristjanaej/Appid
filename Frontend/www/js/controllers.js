angular.module('app.controllers', [])

.controller('homeCtrl', function($scope) {

})

.controller('loginCtrl', function($scope, LoginService, $ionicPopup, $state) {
	$scope.data = {};

	$scope.login = function(){
		console.log('U: ' + $scope.data.username);
		LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data){
				$state.go('menu.home');
				var alertPopup = $ionicPopup.alert({
					title: 'Welcome ' +$scope.data.username ,
					template: 'Mechanic Maid 1.0'
				});
			}).error(function(data){
				var alertPopup = $ionicPopup.alert({
					title: 'Login failed',
					template: 'Please check your credentials!'
				});
			});
	};
})

.controller('flightLegsCtrl', function($scope, $http, $ionicPopup) {
	$scope.flights = [];
	$scope.getData = function() {
    $http.get('http://10.110.6.82:3333/api/arrdep/').then(function(resp) {
      $scope.flights = resp.data;
      $scope.$broadcast('scroll.refreshComplete');
      // For JSON responses, resp.data contains the result
    }, function(err) {

      // err.status will contain the status code
  	  var alert =  $ionicPopup.alert({
  	   	title: 'Error',
  	   	'template': 'Could not connect to flight schedule API' + err + ' ' + Object.keys(err)
  	  });
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
  $scope.getData();
})

.controller('fleetListCtrl', function($scope, $state, $stateParams, $http, $ionicPopup) {
	$scope.fleetList = [];
  $scope.getData = function() {
    $http.get('http://10.110.6.82:3333/api/fleet/').then(function(resp) {
      $scope.fleetList = resp.data;
      $scope.$broadcast('scroll.refreshComplete');
      // For JSON responses, resp.data contains the result
    }, function(err) {

      // err.status will contain the status code
  	  var alert =  $ionicPopup.alert({
  	   	title: 'Error',
  	   	'template': 'Could not connect to aircraft database API' 
      });
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
  $scope.getData();

  $scope.viewAircraft = function(aircraftId){
		$state.go('menu.aircraft', {aircraftId: aircraftId});
	};
})

.controller('aircraftCtrl', function($scope, $state, $stateParams, $http, $ionicPopup) {
	$scope.ac = [];
  $scope.getData = function() {
    $http.get('http://178.62.84.47:3000/aircraft?id='+$stateParams.aircraftId).then(function(resp) {
      $scope.ac = resp.data;
      $scope.$broadcast('scroll.refreshComplete');
      // For JSON responses, resp.data contains the result
    }, function(err) {

      // err.status will contain the status code
  	  var alert =  $ionicPopup.alert({
  	   	title: 'Error',
  	   	'template': 'Could not connect to aircraft database API'
      });
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
  $scope.getData();

  $scope.viewAircraft = function(aircraftId){
		$state.go('menu.aircraft', {aircraftId: aircraftId});
	};
})


.controller('contactsCtrl', function($scope, $http, $ionicPopup) {
  $scope.contacts = [];

  $scope.getData = function() {
    $http.get('http://178.62.84.47:3000/contact').then(function(resp) {
      $scope.contacts = resp.data;
      $scope.$broadcast('scroll.refreshComplete');
      // For JSON responses, resp.data contains the result
    }, function(err) {

      // err.status will contain the status code
  	  var alert =  $ionicPopup.alert({
  	   	title: 'Error',
  	   	'template': 'Could not connect to contacts database API'
      });
      $scope.$broadcast('scroll.refreshComplete');
    });
  };

  $scope.getData();

})

.controller('myInfoCtrl', function($scope, LoginService) {
	$scope.loggedInUser = LoginService.loggedInUser();
});

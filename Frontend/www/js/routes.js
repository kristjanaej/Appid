angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('menu.home', {
    url: '/home',
    views: {
      'side-menu': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu',
    templateUrl: 'templates/menu.html',
    abstract: true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu.flightLegs', {
    url: '/flight-legs',
    views: {
      'side-menu': {
        templateUrl: 'templates/flightLegs.html',
        controller: 'flightLegsCtrl'
      }
    }
  })

  .state('menu.fleetList', {
    url: '/fleet-list',
    views: {
      'side-menu': {
        templateUrl: 'templates/fleetList.html',
        controller: 'fleetListCtrl'
      }
    }
  })

  .state('menu.employees', {
    url: '/employees',
    views: {
      'side-menu': {
        templateUrl: 'templates/employees.html',
        controller: 'employeesCtrl'
      }
    }
  })
  .state('menu.employee', {
    url: '/employee/:employeeId',
    views: {
      'side-menu': {
        templateUrl: 'templates/employee.html',
        controller: 'employeeCtrl'
      }
    }
  })
  .state('menu.aircraft', {
    url: '/employee/:aircraftId',
    views: {
      'side-menu': {
        templateUrl: 'templates/aircraft.html',
        controller: 'aircraftCtrl'
      }
    }
  })
  .state('menu.contacts', {
    url: '/contacts',
    views: {
      'side-menu': {
        templateUrl: 'templates/contacts.html',
        controller: 'contactsCtrl'
      }
    }
  })

  .state('menu.myInfo', {
    url: '/my-info',
    views: {
      'side-menu': {
        templateUrl: 'templates/myInfo.html',
        controller: 'myInfoCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/login');



});

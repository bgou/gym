angular.module("gym").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function ($urlRouterProvider, $stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('routines', {
        url: '/routines',
        templateUrl: 'client/routines/views/routines-list.ng.html',
        controller: 'RoutineListCtrl',
        controllerAs: 'routineCtrl'
      });

    $urlRouterProvider.otherwise("/routines");
  }]);
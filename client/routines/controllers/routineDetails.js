angular.module("gym").controller("RoutineDetailsCtrl", ['$scope', '$stateParams', '$meteor',
  function ($scope, $stateParams, $meteor) {
    $scope.routine = $meteor.object(Routines, $stateParams.routineId);
  }]);

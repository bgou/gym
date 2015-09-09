angular.module("gym").controller("RoutineListCtrl", ['$scope', '$meteor',
  function($scope, $meteor){
    var vm = this;
    vm.routines = $meteor.collection(Routines).subscribe('routines');

    vm.remove = function(routine){
      vm.routines.remove(routine);
    };

    vm.removeAll = function(){
      vm.routines.remove();
    };
  }]);
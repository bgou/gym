angular.module("gym").controller("RoutineListCtrl", ['$scope', '$meteor',
  function($scope, $meteor){
    var vm = this;
    // vm.routines = $meteor.collection(Routines, false);
    // vm.activeRoutines = $meteor.collection(Routines).subscribe('activeRoutines');
    // vm.inactiveRoutines = $meteor.collection(Routines).subscribe('inactiveRoutines');


    $meteor.subscribe('activeRoutines').then(function(subscriptionHandle){
      vm.activeRoutines = $meteor.collection(Routines);

      console.log(vm.activeRoutines + ' is ready');

      // You can use the subscription handle to stop the subscription if you want
      // subscriptionHandle.stop();
    });


    $meteor.subscribe('inactiveRoutines').then(function(subscriptionHandle){
      vm.inactiveRoutines = $meteor.collection(Routines);

      console.log(vm.inactiveRoutines + ' is ready');

      // You can use the subscription handle to stop the subscription if you want
      // subscriptionHandle.stop();
    });

    vm.removeActive = function(routine){
      vm.activeRoutines.remove(routine);
    };

    vm.removeAllActive = function(){
      vm.activeRoutines.remove();
    };
  }]);
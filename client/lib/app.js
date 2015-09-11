angular.module('gym',[
    'angular-meteor',
    'ui.router',
    'ngMaterial'
]);


function onReady() {
  angular.bootstrap(document, ['gym']);
}
 
if (Meteor.isCordova)
  angular.element(document).on("deviceready", onReady);
else
  angular.element(document).ready(onReady);
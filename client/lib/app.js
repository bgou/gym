angular.module('gym',[
    'angular-meteor',
    'ui.router'
]);


function onReady() {
  angular.bootstrap(document, ['gym']);
  $(".button-collapse").sideNav();
}
 
if (Meteor.isCordova)
  angular.element(document).on("deviceready", onReady);
else
  angular.element(document).ready(onReady);
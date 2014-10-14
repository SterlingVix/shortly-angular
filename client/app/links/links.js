angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  
  ($scope.getLinks = function() {
    Links.get()
         .success( function(links) {
           $scope.data.links = links;
         }); // end .success()
  })(); // end .getLinks && invoke immediately
}) // end .controller

.directive('shortenedLink', function($animate) {
  return {
    restrict: 'A',
    scope: {link: '='},
    templateUrl: 'app/links/link.html'
  };
}); // end .directive
'use strict';
// Declare app level module which depends on views, and components
var app = angular.module('discman', ['ngRoute']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //This doesn't work until we have a database connection becasue it is making ajax call to get html files
  $routeProvider.when('/contentAdmin', {
    templateUrl: 'components/contentAdmin/contentAdmin.html',
    controller: 'ContentAdminController'
  })

  .when('/docRequest', {
    templateUrl: 'components/docrequest/docRequest.html',
    controller: 'DocRequestController'
  })

  .when('/productAdmin', {
    templateUrl: 'components/productadmin/productAdmin.html',
    controller: 'ProductAdminController'
  })

  .otherwise({
    redirectTo: '/contentAdmin.html'
  });

}]);


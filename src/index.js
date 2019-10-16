import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.min.css';

export const app = 'app'

angular.module(app, [
    'ngRoute',

    // 'ngResource',
    // ClienteModule,
  ])

  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
  
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
  
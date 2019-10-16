import angular from 'angular';
import 'bootstrap/dist/cgit ss/bootstrap.min.css';
// import './base.scss';

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
  
import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.min.css';
import nome from '.clientes';
// import './base.scss';

export const app = 'app'

angular.module(app, [
    'ngRoute',
    nome
  ])

  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
  
    $routeProvider.otherwise({redirectTo: '/clientes'});
  }]);
  
import angular from 'angular';
// import 'bootstrap/dist/css/bootstrap.min.css';
import routeConfig from './routeConfig'
// import ClientesModule from './clientes/clientesModel';
// import './base.scss';

export const app = 'app'


angular.module(app, [
    'ngRoute',
    // ClientesModule
    
  ])


  .config(routeConfig)

  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
  
    $routeProvider.otherwise({redirectTo: '/clientes'});
  }]);
  
  routeConfig()

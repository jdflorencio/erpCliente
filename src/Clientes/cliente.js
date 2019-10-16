import angular from 'angular';

const Clientes = 'clientes'

angular.module(Clientes, ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/clientes', {
    templateUrl: 'Clientes/clientes.html',
    controller: 'ClientesCtrl'
  });
}])

.controller('ClientesCtrl', [function() {
    console.log('estou em clientes')

}]);

export default Clientes;
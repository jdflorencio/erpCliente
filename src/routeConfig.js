export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    console.log('estou em rotas')
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/painel');
    $routeProvider.when('/clientes', {
        template: '<h1>teste</h2>',
      });
}


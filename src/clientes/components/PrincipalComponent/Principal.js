// import 'angular';
//import template from './Principal.html'
class PrincipalController {
    constructor($http, $rootScope, $scope, $state, $stateParams, $timeout, ModalService, AlertService, API) {
      'ngInject';
  
      console.log('Cliente: PrincipalComponent...');
    }  
}

export const PrincipalComponent = {
    controller: PrincipalController,
    template: "<p>hello...</p>",
    controllerAs: 'vm'
  };
  
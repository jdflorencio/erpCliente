import angular from 'angular';
// import uiRouter from 'angular-ui-router';
// import 'angular-ui-router/release/stateEvents';

import {
  PrincipalComponent,
} from './components';

const ClientesModule = 'cliente';

angular.module(ClienteModule, [
  uiRouter,
  'ui.router.state.events'
])

.component('clientePrincipal', PrincipalComponent)




export default ClientesModule;

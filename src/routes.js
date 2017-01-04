export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('notes', {
      url: '/',
      component: 'notes'
    })
    .state('categories', {
      url: '/categories',
      component: 'categories'
    })
    .state('add', {
      url: '/add',
      component: 'notesForm'
    })
    .state('edit', {
      url: '/edit/:id',
      component: 'notesForm'
    });
}

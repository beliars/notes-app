export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('categories', {
      url: '/',
      component: 'categories'
    })
    .state('notes', {
      url: '/notes',
      component: 'notes'
    })
  //   .state('detail', {
  //     url: '/detail/:id',
  //     component: 'productItem'
  //   });
}

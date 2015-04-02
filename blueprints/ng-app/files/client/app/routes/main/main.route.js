/* @ngInject */
function mainRouteConfig($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'main.html',
      controller: 'MainCtrl',
      controllerAs: 'MainCtrl'
    });
}

export default mainRouteConfig;

(function () {

  angular.module('championApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

  function config ($routeProvider, $locationProvider) {
    
    console.log("TEST");
    
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/champion/', {
        templateUrl: '/champion/champion.view.html',
        controller: 'championCtrl',
        controllerAs: 'vm'
      })
      .when('/summoner/', {
        templateUrl: '/summoner/summoner.view.html',
        controller: 'summonerCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(
      {
        enabled: true,
        requireBase: false,
        rewriteLinks: true
      }
    );
  }

  angular
    .module('championCtrlApp')
    .config(['$routeProvider', '$locationProvider', config]);

})();
(function () {

  angular
    .module('championApp')
    .directive('sidebar', sideBar);

  function sideBar () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directives/sideBar/sideBar.template.html'
    };
  }
})();
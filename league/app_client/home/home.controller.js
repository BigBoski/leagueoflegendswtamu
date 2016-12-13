(function() {

  angular
    .module('championApp')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', `SelectedData`];

  function homeCtrl($scope, SelectedData) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    var vm = this;
    console.log(window.location);
    
    vm.content = "Champion Data";
    
    vm.selectedChampion = "";
    
    //check selected Departure
    if(SelectedData.selectedChampion !== null){
      vm.selectedChampion = SelectedData.selectedChampion;
    }
  }

})();
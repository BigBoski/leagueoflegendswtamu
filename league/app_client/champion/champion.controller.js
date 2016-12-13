(function() {

  angular
    .module('championApp')
    .controller('championCtrl', championCtrl);

  championCtrl.$inject = ['$scope', 'ChampionData', 'ChampionData', 'SelectedData'];

  function championCtrl($scope, ChampionData, ChampionData, SelectedData) {

    console.log(window.location);    
    
    
    var vm = this;
    vm.content = "Champion Data";
    vm.selectedChampion = "";
    
    //check selected Departure
    if(SelectedData.selectedChampion !== null){
      vm.selectedChampion = SelectedData.selectedChampion;
    }
    
    vm.getChampionData = function() {
      ChampionData.getChampions()
        .success(function(data) {
          vm.champions = data;
          console.log(vm.airports);
        })
        .error(function(e) {
          console.log(e);
        });
    }

    vm.toggleMenu = function() {
      if (vm.class === "toggled") {
        vm.class = "";
      }
      else {
        vm.class = "toggled";
      }
      console.log(vm.class + " is good");
    };
    
    vm.clearSelectedData = function(){
      
      vm.selectedChampion = null;
    }
    
    //saved departure
    $scope.$watch(
      function(){
        return vm.selectedChampion;    
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.name !== oldValue.name){
          SelectedData.selectedchampion = newValue;
        } 
      }, 
      true
    );
  

    //call services
    vm.getChampionData();

  }

})();

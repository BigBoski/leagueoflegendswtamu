//(function() {

  angular
    .module('championApp')
    .controller('championCtrl', championCtrl);
      championCtrl.$inject = ['$scope'];

function championCtrl($http, $scope) {
    var vm = this;
    var datachampion;
    vm.championNames = [];
    
    $http.get('/api/championData').then(function(response){ 
        
       datachampion = response.data;
       vm.output = response.data;
       
       for(var i = 0; i<datachampion.length; i++){
                vm.championNames.push(datachampion[i].name);
       }

    });    
  /*championCtrl.$inject = ['$scope', 'ChampionData', 'SelectedData'];

  function championCtrl($scope, ChampionData, SelectedData) {

    console.log(window.location);    
    
    
    var vm = this;
    vm.content = "Champions!";
    vm.selectedChampion = "";
    
    //check selected champion
    if(SelectedData.selectedChampion !== null){
      vm.selectedChampion = SelectedData.selectedChampion;
    }
    
    vm.getChampionData = function() {
      ChampionData.getChampions()
        .success(function(data) {
          vm.champions = data;
          console.log(vm.champions);
        })
        .error(function(e) {
          console.log(e);
        });
    };

    vm.toggleMenu = function() {
      if (vm.class === "toggled") {
        vm.class = "";
      }
      else {
        vm.class = "toggled";
      }
      console.log(vm.class + " is good");
    };
    
    if(datachampion.name !== null){
        vm.name = datachampion.name;
    }
}
    /*
    vm.datachampion = function(){
      
      vm.selectedChampion = null;
    };
    
   //saved champion
    $scope.$watch(
      function(){
        return vm.selectedChampion;    
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.name !== oldValue.name){
          SelectedData.selectedChampion = newValue;
        } 
      }, 
      true
    );
  

    //call services
    vm.getChampionData();

  }

})();*/


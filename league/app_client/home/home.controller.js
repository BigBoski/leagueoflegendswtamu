(function() {

  angular
    .module('championApp')
    .controller('homeCtrl', homeCtrl);

  //homeCtrl.$inject = ['$scope'];
  
//homeCtrl.$inject = ['$scope', 'SelectedData']
  function homeCtrl($http) {
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
    
   /*     if(SelectedData.name !== null){
      vm.selectedChampion = SelectedData.name;
    }
  function homeCtrl($http) {
    var vm = this;
    
        $http.get('/api/championData').then(function(response){ 
       vm.output = response.data;

    });*/
    console.log(window.location);
    
    vm.content = "League of Legends";
    
    vm.selectedChampion = "";
    
    
  }

})();
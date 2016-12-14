(function() {

    angular
        .module('championApp')
        .controller('summonerCtrl', summonerCtrl);

    summonerCtrl.$inject = ['$scope', 'SelectedData', 'lolSummoner'];

    function summonerCtrl($scope, SelectedData, lolSummoner) {
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        var vm = this;
        console.log(window.location);

        vm.content = "Summoner";

        vm.selectedC = "";
        vm.selectedArrivalICAO = "";
        vm.selectedWeight = "";

        //check selected Departure
        if (SelectedData.selectedChampion !== null) {
            vm.selectedChampion = SelectedData.selectedChampion;
        }

        vm.getSummoner = function() {
            
            var id = vm.selectedSummoner.name;
            console.log(id);
            var lon = vm.selectedDepartureICAO.airportLon;
            console.log(lon);            

            lolSummoner.getsummoner(id)
                .success(function(data) {
                    vm.summonerdata = data;
                    console.log(vm.summonerdata);
                })
                .error(function(e) {
                    console.log(e);
                });
        }
        
        vm.getSummonerTwo = function() {
            
            var id = vm.selectedSummoner.name;
            console.log(id);
            var lon = vm.selectedDepartureICAO.airportLon;
            console.log(lon);            

            lolSummoner.getsummoner(id)
                .success(function(data) {
                    vm.summonerdata = data;
                    console.log(vm.summonerdata);
                })
                .error(function(e) {
                    console.log(e);
                });
        }
        
        //call services
        vm.getSummoner();
        vm.getSummonerTwo();

    }

})();

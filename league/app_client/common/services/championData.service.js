(function() {

    angular
        .module('championApp')
        .service('ChampionData', championData);

    championData.$inject = ['$http'];

    function championData($http) {
        var getChampionData = function() {
            return $http.get('/api/championData');
        }
        return {
            getChampionData: getChampionData,
        };
    }
})();

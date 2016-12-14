(function() {

  angular
    .module('championApp')
    .factory('SelectedData', selectedData);

  //selectedData.$inject = ['$http'];
  function selectedData () {
      return {
          selectedChampion : ''
      };
  }

})();
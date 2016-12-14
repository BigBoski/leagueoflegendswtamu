(function() {

    angular
        .module('championApp')
        .service('lolSummoner', lolsummoner);

    lolsummoner.$inject = ['$http', 'KeyStore'];

    function lolsummoner($http, KeyStore) {
        var getSummoner = function(name) {

            KeyStore.getKeys()
                .success(function(data) {
                    var keys = data;
                    console.log(keys);
                    var summonerkey = keys.league_key;
                    return $http.jsonp('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + name + '?' +
                         summonerkey + "?callback=JSON_CALLBACK", {
                            jsonpCallbackParam: 'callback'
                        });
                })
                .error(function(e) {
                    console.log(e);
                });
        };
        
        var getSummonerTwo =  function(name){
            
                KeyStore.getKeys()
                .success(function(data) {
                    var keys = data;
                    console.log(keys);
                    var summonerkey = keys.league_key;
                    return $http.jsonp('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + name + '?' +
                         summonerkey + "?callback=JSON_CALLBACK", {
                            jsonpCallbackParam: 'callback'
                        });    
                })
                .error(function(e) {
                    console.log(e);
                });
        };        

        return {
            getWeather: getSummoner,
            getWeather2 : getSummonerTwo
        };
    }
    


})();
var mongoose = require('mongoose');

var Champions = new mongoose.Schema({
    name: String,
    description: String,
    passivename: String,
    passivedesc: String,
    abilityonename: String,
    abilityonedesc: String,
    abilitytwoname: String,
    abilitytwodesc: String,
    abilitythreename: String,
    abilitythreedesc: String,
    abilityfourname: String,
    abilityfourdesc: String
    
});

/*var summoner = new mongoose.Schema({ 
    Name: String,
    Losses: Number, 
    Wins: Number
});*/

mongoose.model('Champions', Champions, 'Champions');
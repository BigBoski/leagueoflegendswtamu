var mongoose = require('mongoose');
var ChampionData = mongoose.model('ChampionData');


//utility method for the module
var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

//// CLIMB DATA ////////////////////////////////////////////////////////////////
/* GET all ClimbData records */
module.exports.championDataReadAll = function(req, res) {
    console.log("Finding all ChampionData", req);

    ChampionData
        .find({})
        .exec(function(err, climbData) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(climbData);
            sendJSONresponse(res, 200, climbData);
        });
};


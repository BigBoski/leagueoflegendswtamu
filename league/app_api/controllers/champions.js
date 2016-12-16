var mongoose = require('mongoose');
var ChampionData = mongoose.model('Champions');


//utility method for the module
var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};
module.exports.championDataReadAll = function(req, res) {
  console.log('Finding data');
    ChampionData
        .find({})
        .exec(function(err, championData) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(championData);
            sendJSONresponse(res, 200, championData);
        });
};

module.exports.championDataReadOne = function(req, res) {
    console.log('Finding Champion Data Record', req.params);
    if (req.params && req.params.weight) {
        ChampionData
            .find({
                weight: req.params.weight
            })
            .exec(function(err, championData) {
                if (!championData) {
                    sendJSONresponse(res, 404, {
                        "message": "champion value not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(championData);
                sendJSONresponse(res, 200, championData);
            });
    }
    else {
        console.log('No name specified');
        sendJSONresponse(res, 404, {
            "message": "no name in request"
        });
    }
};

/*
//// CLIMB DATA ////////////////////////////////////////////////////////////////
/* GET all ClimbData records 
module.exports.championDataReadsAll = function(req, res) {
    console.log("Finding all ChampionData", req);

    ChampionData
        .find({})
        .exec(function(err, Champions) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(ChampionData);
            sendJSONresponse(res, 200, Champions);
        });
        
        module.exports.championDataReadOne = function(req,res){
    console.log('Searching for your champion', req.params);
    if(req.params && req.params.name){
        ChampionData
            .find({
                name: req.params.name
            })
            .exec(function(err,Champions){
                if(!Champions){
                    sendJSONresponse(res,404, {
                        "message": "Name not found"
                    });
                    return;
                }
                else if(err){
                    console.log(err);
                    sendJSONresponse(res,404,err);
                    return;
                }
                console.log(Champions);
                sendJSONresponse(res,200,Champions);
            });
    }
    else{
        console.log('No Name specified');
        sendJSONresponse(res,404, {
            "message": "No name in request"
        });
    }
};*/



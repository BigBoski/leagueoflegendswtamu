var express = require('express');
var router = express.Router();
var ctrlChampionData = require('../controllers/champions');


router.get('/championData', ctrlChampionData.championDataReadAll);

module.exports = router;

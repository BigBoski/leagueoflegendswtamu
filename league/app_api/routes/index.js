var express = require('express');
var router = express.Router();
var ctrlChampionData = require('../controllers/champions');


router.get('/championData', ctrlChampionData.championDataReadAll);
router.get('/championData:name', ctrlChampionData.championDataReadOne);

module.exports = router;

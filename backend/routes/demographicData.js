const express = require('express');

const router = express.Router();
const demographicData = require('../data/demographicData.json')

router.get('/', (req, res)=>{
return res.json(demographicData)
})

module.exports = router;
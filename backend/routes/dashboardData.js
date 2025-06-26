const express = require('express')

const router = express.Router();

const dashboardData = require('../data/dashboardData')


router.get('/', (req, res)=>{
return res.json(dashboardData)
})

module.exports = router;
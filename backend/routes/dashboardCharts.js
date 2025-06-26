const express = require('express')

const router = express.Router()
const dashboardChartData = require('../data/dashboardCharts.json')


router.get('/', (req, res)=>{
    res.json(dashboardChartData)
})

module.exports = router;
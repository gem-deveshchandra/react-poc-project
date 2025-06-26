const express  = require('express')
const cors = require('cors')

const app = express();
const PORT = 5000;
 
app.use(cors());
app.use(express.json());

const employeeRoute = require('./routes/employees');
const dashboardChartsRoute = require('./routes/dashboardCharts');
const dashboardDataRoute = require('./routes/dashboardData');
const demographicDataRoute = require('./routes/demographicData');
app.use('/api/employees', employeeRoute)
app.use('/api/dashboardCharts', dashboardChartsRoute)
app.use('/api/dashboardData', dashboardDataRoute)
app.use('/api/demographicData', demographicDataRoute)
app.get("/", (req, res) => {
    res.send("Backend is running!");
  });
app.listen(PORT, (  )=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
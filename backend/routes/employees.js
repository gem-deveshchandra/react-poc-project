const express = require('express')

const router = express.Router();
const employees = require('../data/employees.json');

router.get('/', (req, res) => {
  // throw new Error("oops")
    res.json(employees);
  });
module.exports = router  
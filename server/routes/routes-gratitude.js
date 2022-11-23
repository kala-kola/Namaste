const express = require('express')

const db = require('../db/db-gratitude')

const router = express.Router()

router.get('/', (req, res) => {
  db.getGratitudes()
    .then((gratitudes) => {
      res.json(gratitudes)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong, Routes' })
    })
})
module.exports = router

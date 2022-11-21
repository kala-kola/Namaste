const express = require('express')

const db = require('../db/db-asanas')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAsanas()
    .then((asanas) => {
      res.json(asanas)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong, Routes' })
    })
})
module.exports = router

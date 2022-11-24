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

router.post('/add', (req, res) => {
  db.addGratitudes(req.body)
    .then((gratitude) => {
      res.json(gratitude)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong, Routes' })
    })
})

router.patch('/update/:id', (req, res) => {
  db.updateGratitude(req.params.id, req.body)
    .then((newGratitude) => {
      res.json(newGratitude)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong, Routes' })
    })
})

router.delete('/delete/:id', (req, res) => {
  db.deleteGratitude(req.params.id)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong, Routes' })
    })
})

module.exports = router

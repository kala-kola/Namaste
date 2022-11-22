const express = require('express')
const path = require('path')
//const routes = require('./routes')

const fruitRoutes = require('./routes/fruits')
const asanasRoutes = require('./routes/routes-asanas')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1/asanas', asanasRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server

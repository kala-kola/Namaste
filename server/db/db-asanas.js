const connection = require('./connection')

function getAsanas(db = connection) {
  return db('db-asanas').select()
}

module.exports = {
  getAsanas,
}

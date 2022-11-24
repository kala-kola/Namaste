const connection = require('./connection')

function getGratitudes(db = connection) {
  return db('gratitude').select()
}

module.exports = {
  getGratitudes,
}

const connection = require('./connection')

function getGratitudes(db = connection) {
  return db('gratitudes').select()
}

module.exports = {
  getGratitudes,
}

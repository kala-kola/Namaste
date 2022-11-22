const connection = require('./connection')

function getAsanas(db = connection) {
  return db('asanas').select()
  //inside db parenthesis is table name
}

module.exports = {
  getAsanas,
}

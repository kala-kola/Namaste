const connection = require('./connection')

function getGratitudes(db = connection) {
  return db('gratitude').select()
}

function getGratitude(id, db = connection) {
  return db('gratitude').where({ id }).select().first()
}

function addGratitudes(newGratitude, db = connection) {
  return db('gratitude')
    .insert(newGratitude)
    .then((idArr) => getGratitude(idArr[0]))
}

function updateGratitude(id, updatedGratitude, db = connection) {
  return db('gratitude')
    .where({ id })
    .update(updatedGratitude)
    .then(() => getGratitude(id))
}

function deleteGratitude(id, db = connection) {
  return db('gratitude').del().where({ id })
}

module.exports = {
  getGratitudes,
  addGratitudes,
  updateGratitude,
  deleteGratitude,
}

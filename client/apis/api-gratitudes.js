import request from 'superagent'

const rootUrl = '/api/v1'

export function getGratitudes() {
  return request.get(rootUrl + '/gratitudes').then((res) => {
    return res.body
  })
}

export function addGratitude(gratitude) {
  return request
    .post('/api/v1/gratitudes/add')
    .send({ gratitude })
    .then((res) => {
      return res.body
    })
}

export function updateGratitude(id, gratitude) {
  console.log({ gratitude })

  return request
    .patch('/api/v1/gratitudes/update/' + id)
    .send({ gratitude })
    .then((res) => {
      return res.body
    })
}

export function deleteGratitude(id) {
  return request.del('/api/v1/gratitudes/delete/' + id)
}

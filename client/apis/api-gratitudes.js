import request from 'superagent'

const rootUrl = '/api/v1'

export function getGratitudes() {
  return request.get(rootUrl + '/gratitudes').then((res) => {
    return res.body
  })
}

// export function addGratitude(form) {
//   return request
//     .post('/api/v1/gratitudes/add')
//     .send(form)
//     .then((res) => {
//       return res.body
//     })
// }

// export function updateGratitude(id, form) {
//   return request
//     .post('/api/v1/gratitudes/update/:id')
//     .where((id = 'id'))
//     .update(form)
// }

// export function deleteGratitude(id) {
//   return request.del('/api/v1/gratitudes/:id').where((id = 'id'))
// }

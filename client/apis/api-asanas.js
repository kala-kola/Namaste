import request from 'superagent'

const rootUrl = '/api/v1'

export function getAsanas() {
  return request.get(rootUrl + '/asanas').then((res) => {
    return res.body
  })
}

import { getGratitudes } from '../apis/api-gratitudes'

export const SET_GRATITUDES = ' SET_GRATITUDES'
//simple
export function setGratitudes(gratitudes) {
  return {
    type: SET_GRATITUDES,
    payload: gratitudes,
  }
}
//thunky
export function fetchGratitudes() {
  return (dispatch) => {
    return getGratitudes().then((gratitudes) => {
      dispatch(setGratitudes(gratitudes))
    })
  }
}

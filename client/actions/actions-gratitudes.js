import { getGratitudes, deleteGratitude } from '../apis/api-gratitudes'

export const SET_GRATITUDES = 'SET_GRATITUDES'
export const DEL_GRATITUDE = 'DEL_GRATITUDE'
//simple
export function setGratitudes(gratitudes) {
  return {
    type: SET_GRATITUDES,
    payload: gratitudes,
  }
}
export function removeGratitude(id) {
  return {
    type: DEL_GRATITUDE,
    payload: id,
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
export function delGratitude(id) {
  return (dispatch) => {
    return deleteGratitude(id).then(() => {
      dispatch(removeGratitude(id))
    })
  }
}

import {
  getGratitudes,
  deleteGratitude,
  addGratitude,
  updateGratitude,
} from '../apis/api-gratitudes'

export const SET_GRATITUDES = 'SET_GRATITUDES'
export const DEL_GRATITUDE = 'DEL_GRATITUDE'
export const ADD_GRATITUDE = 'ADD_GRATITUDE'
export const EDIT_GRATITUDE = 'EDIT_GRATITUDE'

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
export function todayGratitude(newGratitude) {
  return {
    type: ADD_GRATITUDE,
    payload: newGratitude,
  }
}
export function changeGratitude(gratitudeEdit) {
  return {
    type: EDIT_GRATITUDE,
    payload: gratitudeEdit,
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
export function makeGratitude(newGratitude) {
  return (dispatch) => {
    return addGratitude(newGratitude).then((gratitude) => {
      dispatch(todayGratitude(gratitude))
    })
  }
}
export function edGratitude(id, editedGratitude) {
  return (dispatch) => {
    return updateGratitude(id, editedGratitude).then((gratitude) => {
      dispatch(changeGratitude(gratitude))
    })
  }
}

import { getAsanas } from '../apis/api-asanas'

export const SET_ASANAS = ' SET_ASANAS'
//simple
export function setAsanas(asanas) {
  return {
    type: SET_ASANAS,
    payload: asanas,
  }
}
//thunky
export function fetchAsanas() {
  return (dispatch) => {
    return getAsanas().then((asanas) => {
      dispatch(setAsanas(asanas))
    })
  }
}

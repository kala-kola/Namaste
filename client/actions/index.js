import { getFruits } from '../apis/fruits'

export const SET_FRUITS = 'SET_FRUITS'
//simple
export function setFruits(fruits) {
  return {
    type: SET_FRUITS,
    payload: fruits,
  }
}
//thunky
export function fetchFruits() {
  return (dispatch) => {
    return getFruits().then((fruits) => {
      dispatch(setFruits(fruits))
    })
  }
}

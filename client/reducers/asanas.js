import { SET_ASANAS } from '../actions/actions-asanas'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_ASANAS:
      return payload
    default:
      return state
  }
}

export default reducer

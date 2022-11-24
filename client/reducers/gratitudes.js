import { SET_GRATITUDES, DEL_GRATITUDE } from '../actions/actions-gratitudes'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_GRATITUDES:
      return payload
    case DEL_GRATITUDE:
      return state.filter((gratitude) => gratitude.id !== payload)
    default:
      return state
  }
}

export default reducer

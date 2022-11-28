import {
  SET_GRATITUDES,
  DEL_GRATITUDE,
  ADD_GRATITUDE,
  EDIT_GRATITUDE,
} from '../actions/actions-gratitudes'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_GRATITUDES:
      return payload
    case DEL_GRATITUDE:
      return state.filter((gratitude) => gratitude.id !== payload)
    case ADD_GRATITUDE:
      return [...state, payload]
    case EDIT_GRATITUDE:
      return state.map((gratitude) => {
        if (gratitude.id == payload.id) {
          return payload
        } else {
          return gratitude
        }
      })
    default:
      return state
  }
}

export default reducer

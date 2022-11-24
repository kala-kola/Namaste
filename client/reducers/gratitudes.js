import { SET_GRATITUDES } from '../actions/actions-gratitudes'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_GRATITUDES:
      return payload
    default:
      return state
  }
}

export default reducer

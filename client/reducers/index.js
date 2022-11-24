import { combineReducers } from 'redux'

import fruits from './fruits'
import asanas from './asanas'
import gratitudes from './gratitudes'

export default combineReducers({
  fruits,
  asanas,
  gratitudes,
})

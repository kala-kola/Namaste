import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchFruits } from '../actions'
import { fetchAsanas } from '../actions/actions-asanas'
import SunSalutation from './SunSalutation'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFruits())
    dispatch(fetchAsanas())
  }, [])

  return (
    <>
      <div className="app">
        <SunSalutation />
      </div>
    </>
  )
}

export default App

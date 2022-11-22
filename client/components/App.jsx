import { Route, Routes } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Nav from './Nav'
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
        <Nav />
        <Routes>
          <Route path="/" element={<SunSalutation />} />
        </Routes>
      </div>
    </>
  )
}

export default App

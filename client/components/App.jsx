import { Route, Routes } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Nav from './Nav'
//import { fetchFruits } from '../actions'
import { fetchAsanas } from '../actions'
import SunSalutation from './SunSalutation'
import Gratitudes from './Gratitudes'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    //dispatch(fetchFruits())
    dispatch(fetchAsanas())
  }, [])

  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<SunSalutation />} />
          <Route path="/gratitudes" element={<Gratitudes />} />
        </Routes>
      </div>
    </>
  )
}

export default App

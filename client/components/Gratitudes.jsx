import React from 'react'

import { useSelector } from 'react-redux'

export default function SunSalutation() {
  const gratitude = useSelector((gratitude) => state.gratitude)
  //state.asanas is from the reducer/index
  return (
    <div className="gratitude">
      <h1>Gratitude Journal</h1>
      <div></div>
    </div>
  )
}

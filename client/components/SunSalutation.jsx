import React from 'react'

import { useSelector } from 'react-redux'

export default function SunSalutation() {
  const asanas = useSelector((state) => state.asanas)
  //state.asanas is from the reducer/index
  return (
    <div className="sunSalutation">
      <h1>Sun Salutation</h1>
      {asanas.map((asana) => (
        <div key={asana.id}>
          <img src={asana.image} alt={asana.name} />
        </div>
      ))}
    </div>
  )
}

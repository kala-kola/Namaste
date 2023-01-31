import React from 'react'

import { useSelector } from 'react-redux'

export default function SunSalutation() {
  const asanas = useSelector((state) => state.asanas)
  //state.asanas is from the reducer/index
  return (
    <div className="sun-gallery-wrapper">
      <div className="sun-container">
        <div className="sun-row">
          <div className="sunSalutation">
            {asanas.map((asana) => (
              <div className="slider-wrapper" key={asana.id}>
                <img src={asana.image} alt={asana.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

import { useSelector } from 'react-redux'

export default function SunSalutation() {
  const asanas = useSelector((state) => state.asanas)
  //state.asanas is from the reducer/index
  return (
    <div className="sun-gallery-wrapper">
      <div className="sun-container">
        <div className="sun-row">
          <div className="sun-col">
            <div className="sun-slider-wrapper">
              {asanas.map((asana, idx) => (
                <div className="sun" key={asana.id}>
                  <img
                    src={asana.image}
                    alt={asana.name}
                    style={{
                      transform: `rotateY(calc(${idx}*30deg)) translateZ(400px)`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

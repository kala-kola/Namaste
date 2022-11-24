import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { fetchGratitudes } from '../actions/actions-gratitudes'
import Gratitude from './Gratitude'

export default function Gratitudes() {
  const gratitudes = useSelector((state) => state.gratitudes)
  //state.asanas is from the reducer/index
  console.log(gratitudes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGratitudes())
  }, [])

  return (
    <div className="gratitude">
      <h1>Gratitude Journal</h1>

      {gratitudes.map((gratitude) => (
        <Gratitude key={gratitude.id} data={gratitude} />
      ))}

      <div></div>
    </div>
  )
}

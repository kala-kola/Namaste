import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGratitudes, makeGratitude } from '../actions/actions-gratitudes'
import Gratitude from './Gratitude'

export default function Gratitudes() {
  const gratitudes = useSelector((state) => state.gratitudes)
  //state.asanas is from the reducer/index
  console.log(gratitudes)
  const dispatch = useDispatch()
  const [newGratitude, setNewGratitude] = useState('')

  useEffect(() => {
    dispatch(fetchGratitudes())
  }, [])

  function handleChange(event) {
    const { value } = event.target
    setNewGratitude(value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    dispatch(makeGratitude(newGratitude))
    setNewGratitude('')
  }
  return (
    <div className="gratitude">
      <h1>Gratitude Journal</h1>
      <label htmlFor="new_gratitude">What are you grateful for today? </label>
      <input
        value={newGratitude}
        type="text"
        onChange={handleChange}
        id="new_gratitude"
        name="new_gratitude"
      ></input>
      <button onClick={handleSubmit}>ADD GRATITUDE</button>

      <div></div>

      {gratitudes.map((gratitude) => (
        <Gratitude key={gratitude.id} data={gratitude} />
      ))}
    </div>
  )
}

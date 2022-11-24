import React from 'react'
import { delGratitude } from '../actions/actions-gratitudes.js'
import { useDispatch } from 'react-redux'

export default function Gratitude({ data }) {
  const { gratitude, id } = data
  const dispatch = useDispatch()

  function handleDelete() {
    dispatch(delGratitude(id))
    console.log(id)
  }

  return (
    <>
      <div>
        <button onClick={handleDelete}> DEL</button>
        {gratitude}
      </div>
    </>
  )
}

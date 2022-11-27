import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  delGratitude,
  makeGratitude,
  edGratitude,
} from '../actions/actions-gratitudes.js'

export default function Gratitude({ data }) {
  // const [newGratitude, setNewGratitude] = useState('')

  const { gratitude, id } = data
  const dispatch = useDispatch()

  function handleDelete() {
    dispatch(delGratitude(id))
    console.log(id)
  }

  function handleEdit() {
    dispatch(edGratitude(data))
  }
  return (
    <>
      <div>
        <button onClick={handleEdit}> EDIT</button>
        <button onClick={handleDelete}> DEL</button>
        {gratitude}
        {/* <button onClick={handleAdd}> ADD</button> */}
      </div>
    </>
  )
}

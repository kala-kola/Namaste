import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { delGratitude, edGratitude } from '../actions/actions-gratitudes.js'

export default function Gratitude({ data }) {
  const { gratitude, id } = data
  const [updateGratitude, setUpdateGratitude] = useState(gratitude)
  const [edit, setEdit] = useState(false)

  const dispatch = useDispatch()

  function handleDelete() {
    dispatch(delGratitude(id))
    console.log(id)
  }
  function handleChange(event) {
    setUpdateGratitude(event.target.value)
  }

  function handleEdit() {
    dispatch(edGratitude(id, updateGratitude))
  }

  function toggleEdit() {
    setEdit(!edit)
    console.log(edit)
  }

  return (
    <>
      <div>
        <button onClick={toggleEdit}> EDIT</button>
        <button onClick={handleDelete}> DEL</button>

        {edit ? (
          <>
            <input onChange={handleChange} value={updateGratitude} />{' '}
            <button onClick={handleEdit}>SUBMIT EDIT</button>
          </>
        ) : (
          <span>{gratitude}</span>
        )}
      </div>
    </>
  )
}
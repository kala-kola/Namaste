import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { delGratitude, edGratitude } from '../actions/actions-gratitudes.js'

export default function Gratitude({ data }) {
  const { gratitude, id, date } = data
  const [updateGratitude, setUpdateGratitude] = useState(gratitude)
  const [edit, setEdit] = useState(false)

  const dispatch = useDispatch()

  function handleDelete() {
    dispatch(delGratitude(id))
  }

  function handleChange(event) {
    setUpdateGratitude(event.target.value)
  }

  function handleEdit() {
    dispatch(edGratitude(id, updateGratitude))
    setEdit(false)
  }

  function toggleEdit() {
    setEdit(!edit)
  }

  return (
    <>
      <div className="app">
        <div className="grat">
          {edit ? (
            <>
              <input onChange={handleChange} value={updateGratitude} />{' '}
              <button onClick={handleEdit}>SUBMIT EDIT</button>
            </>
          ) : (
            <span id="gratitude">{gratitude}</span>
          )}

          <span>{new Date(date).toLocaleDateString()}</span>
          <button onClick={toggleEdit}> EDIT</button>
          <button onClick={handleDelete}> DEL</button>
        </div>
      </div>
    </>
  )
}

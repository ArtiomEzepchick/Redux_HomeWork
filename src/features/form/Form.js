import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  nameChange,
  surnameChange,
  selectName,
  selectSurname,
  clearForm,
  asyncSubmit,
} from './formSlice'

const showCurrentFieldValue = (field, fieldName) => {
  return field ? `${fieldName} to submit is ${field}` : `Your ${fieldName} field is empty, nothing to submit`
}

export function Form() {
  const name = useSelector(selectName)
  const surname = useSelector(selectSurname)
  const dispatch = useDispatch()
  const handleInputChange = (reducer, event) => dispatch(reducer(event.target.value))
  const handleAsyncSubmit = (inputFields) => {
    dispatch(asyncSubmit(inputFields))
  }

  return (
    <form>
      <label>
        Name:
        <input
          value={name}
          onChange={e => handleInputChange(nameChange, e)}
        />
      </label>
      <label>
        Surname:
        <input
          value={surname}
          onChange={e => handleInputChange(surnameChange, e)}
        />
      </label>
      <button
        type='submit'
        onClick={(e) => {
          e.preventDefault()
          handleAsyncSubmit([name, surname])
          dispatch(clearForm())
        }
        }
      >
        Submit
      </button>
      <div style={{marginTop: '2rem'}}>
        <p>
          {showCurrentFieldValue(name, 'Name')}
        </p>
        <p>
          {showCurrentFieldValue(surname, 'Surname')}
        </p>
      </div>
    </form>
  )
}

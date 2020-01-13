import React, {useReducer} from 'react'

import {actions} from './actions'
import {formReducer} from './reducer'

const initialState = {
  name: '',
  email: '',
  nameError: null,
  emailError: null,
  formComplete: false,
  formSubmitted: false
}

const columnStyle = {
  display: 'flex',
  flexDirection: 'column'
}

const FormExample = () => {
  const [state, dispatch] = useReducer(formReducer, initialState)

  function handleChange (e) {
    dispatch({ type: actions[e.target.name + 'Changed'], payload: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: actions.formSubmitted})
  }

  // this adds a red outline to the input if the field isn't filled out correctly,
  // but only if the user has attempted to submit
  const inputStyle = hasError => {
    return {
      outline: hasError && state.formSubmitted ? '2px solid red' : 'none',
    }
  }

  return (
    <form style={{ ...columnStyle, width: '300px' }} onSubmit={handleSubmit}>
      <label style={columnStyle}>
        <span>Name:</span>
        <input
          style={inputStyle(state.nameError)}
          onChange={handleChange}
          name="name"
          value={state.name}
          type="text"
        />
        <span>{state.formSubmitted && state.nameError}</span>
      </label>
      <label style={columnStyle}>
        <span>email:</span>
        <input
          style={inputStyle(state.emailError)}
          onChange={handleChange}
          name="email"
          value={state.email}
          type="text"
        />
        <span>{state.formSubmitted && state.emailError}</span>
      </label>
      <p>{state.formCompleted && 'Form Submitted Successfully!'}</p>
      <button type="submit">Submit</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </form>
  )
}

export default FormExample
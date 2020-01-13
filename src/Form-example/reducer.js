import {actions} from './actions'
import {validate} from './validate'

export const formReducer = (state, action) => {
  let error
  switch (action.type) {
    case actions.nameChanged:
      error = validate('name', action.payload)
      return { ...state, name: action.payload, nameError: error }
    case actions.emailChanged:
      error = validate('email', action.payload)
      return { ...state, email: action.payload, emailError: error }
    case actions.formSubmitted:
      // if the form has been successfully submitted,
      // stop here to prevent rage clicks and re-submissions
      if (state.formCompleted) return state
      let formValid = true
      // invalidate the form if values are missing or in error
      if (state.nameError || !state.name || state.emailError || !state.email) {
        formValid = false
      }
      // if the user has attempted to submit before, stop here
      if (state.formSubmitted) return { ...state, formCompleted: formValid }
      // if this is the first submit, we need to validate in case the user
      // clicked submit without typing anything
      let nameError = validate('name', state.name)
      let emailError = validate('email', state.email)
      return {
        ...state,
        nameError,
        emailError,
        formSubmitted: true,
        formCompleted: formValid,
      }
    default:
      return state
  }
}

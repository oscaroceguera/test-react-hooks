import React, { useState, useContext } from 'react'
import { UserContext } from './index'

function UserGender() {
  const [gender, setGender] = useState('')
  const { user, dispatch } = useContext(UserContext)
  return (
    <div>
      <h2>Gender value for user {user.Name}</h2>
      <input type="text" placeholder="Gender" value={gender} onChange={(e) => { setGender(e.target.value) }} />

      <button type="button" onClick={() => dispatch({ type: 'UserGender', Gender: gender })}>Next</button>
    </div>
  )
}

export default UserGender  
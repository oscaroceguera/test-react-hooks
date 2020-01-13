import React, { useReducer } from 'react'
import UserName from './userName';
import UserGender from './userGender';
import UserAge from './userAge'; 

const initialState = {
  Name: '',
  Age: '',
  Gender: ''  
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'UserName':
      return {
        Name: action.Name,
        Gender: '',
        Age: ''
      }
    case 'UserAge':
      return {
        ...state,
        Age: action.Age
      }
    case 'UserGender':
      return {
        ...state, Gender: action.Gender
      }
    default:
      return state
  }  
}

export const UserContext = React.createContext()  


function UserInfo() {
  const [user, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <UserContext.Provider value={{ user, dispatch }}>

        <UserName />
        {user.Name && <UserGender />}
        {user.Gender && <UserAge />}
      </UserContext.Provider>
      {
        user.Age && (
          <p>User name is <b>{user.Name}</b> having gender <b>{user.Gender}</b> of Age <b>{user.Age}</b></p>
        )
      }
    </div>
  );  
}

export default UserInfo 
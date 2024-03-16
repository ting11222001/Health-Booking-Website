/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react'

const initialState = {
  user: null,
  role: null,
  token: null,
}

// This will be imported in the UI components
export const AuthContext = createContext(initialState)

// This reducer function takes in the current state and the action object
// , and it returns the next state, which is what React will set the state to.
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        role: null,
        token: null,
      }

    case 'LOGIN_SUCCESS':
      return {
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role
      }

    case 'LOGOUT':
      return {
        user: null,
        role: null,
        token: null,
      }

    default:
      return state // if there's no changes, then return the original state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  console.log("AuthContext state: ", state)

  return <AuthContext.Provider
    value={{
      ...state, // include state.user, state.role, state.token
      dispatch
    }}
  >
    {children}
  </AuthContext.Provider>
}
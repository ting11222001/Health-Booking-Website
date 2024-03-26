/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { createContext, useReducer } from 'react'

const initialState = {
  user: localStorage.getItem('user') != undefined
    ? JSON.parse(localStorage.getItem('user'))
    : null,
  role: JSON.parse(localStorage.getItem('role')) || null,
  token: JSON.parse(localStorage.getItem('token')) || null,
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

    case 'PROFILE_UPDATE':
      return {
        ...state,
        user: action.payload.profile,
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

  // Save the user logged in status in local storage so that the user
  // can stay logged in even when he refreshed the page before logged out.
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user))
    localStorage.setItem('token', JSON.stringify(state.token))
    localStorage.setItem('role', JSON.stringify(state.role))
  }, [state])

  return <AuthContext.Provider
    value={{
      ...state, // include state.user, state.role, state.token
      dispatch
    }}
  >
    {children}
  </AuthContext.Provider>
}
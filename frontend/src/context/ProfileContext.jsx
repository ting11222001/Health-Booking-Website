/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react'

const initialState = {
  profile: null
}

export const ProfileContext = createContext(initialState)

const profileReducer = (state, action) => {
  switch (action.type) {
    case 'PROFILE_UPDATE':
      return {
        profile: action.payload.profile
      }

    default:
      return state
  }
}

export const ProfileContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState)

  console.log("ProfileContext state: ", state)

  return <ProfileContext.Provider
    value={{
      ...state,
      dispatch
    }}
  >
    {children}
  </ProfileContext.Provider>
}
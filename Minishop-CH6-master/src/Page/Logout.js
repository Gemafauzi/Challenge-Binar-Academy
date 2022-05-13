import React from 'react'
import { useDispatch } from 'react-redux'
import userSlice from '../store/user'
import { Navigate } from 'react-router'

const Logout = () => {
const dispatch = useDispatch()
    //hapus token
    localStorage.removeItem('minishopAccessToken')
    //update user menjadi null
    dispatch(userSlice.actions.removeUser())
    
  return (
     <Navigate to="/login" />
  )
}

export default Logout
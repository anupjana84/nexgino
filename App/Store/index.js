import { configureStore } from '@reduxjs/toolkit'
import User from '../Reducer/User'

export const store = configureStore({
  reducer: {
    User:User
  },
})
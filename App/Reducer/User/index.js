import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  user:null,
  token:null,
  accessToken:'',
  refreshToken:'',
}

export const User = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state,action) => {
      state.user=action.payload
   
    },
    setToken: (state,action) =>{

      state.accessToken=action.payload.access
      state.refreshToken=action.payload.refresh
    },
    removeUser: (state,action) =>{

      state.accessToken=''
      state.refreshToken=''
      state.user=null
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { setUser,setToken,removeUser} = User.actions

export default User.reducer
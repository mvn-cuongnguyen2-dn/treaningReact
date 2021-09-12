import { createSlice } from '@reduxjs/toolkit'

export const account = createSlice({
  name: 'account',
  initialState: {
    accounts: {},
    token: false
  },
  reducers: {
    setAccount (state, action) {
      state.accounts = action.payload
      state.token = true
    },
    deleteAccount (state) {
      state.accounts = {}
      state.token = false
    },
  },
})

export const { setAccount, deleteAccount } = account.actions

export default account.reducer

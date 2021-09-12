import { createSlice } from '@reduxjs/toolkit'

export const favourite = createSlice({
  name: 'favourite',
  initialState: {
    value: 0,
    names: []
  },
  reducers: {
    increment: (state, action) => {
      state.value += 1
      state.names.push(action.payload)
    },
    decrement: (state, action) => {
      state.value -= 1
      const index = state.names.findIndex((i) => i === action.payload)
      state.names.splice(index, 1)
    }
  },
})

export const { increment, decrement } = favourite.actions

export default favourite.reducer

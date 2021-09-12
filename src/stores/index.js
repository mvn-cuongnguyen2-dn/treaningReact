import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import favouriteReducer from './favourite'
import accountReducer from './account'

export default configureStore({
  reducer: {
    counter: counterReducer,
    favourite: favouriteReducer,
    account: accountReducer
  }
})

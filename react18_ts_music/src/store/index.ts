import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
const store = configureStore({
  reducer: {
    counterReducer: counterReducer
  }
})

export default store

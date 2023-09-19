import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './greeting/reducer'

export default configureStore({
  reducer: {
    greeting: reducer
  },
})

import { configureStore } from '@reduxjs/toolkit'
import { isDev } from '../utils/getEnv'

export const store = configureStore({
  reducer: {},
  devTools: isDev,
})

// * disable redux devtools in prod
// https://stackoverflow.com/questions/60909402/how-to-exclude-disable-redux-devtools-in-production-build-or-disconnect

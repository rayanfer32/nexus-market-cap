import { configureStore } from '@reduxjs/toolkit'
import { isDev } from '@utils/getEnv'
import homepageReducer from './slices/homepageSlice'

export const store = configureStore({
  reducer: {
    home: homepageReducer,
  },
  devTools: isDev,
})
export type RootState = ReturnType<typeof store.getState>
export const dispatch = store.dispatch
// * disable redux devtools in prod
// https://stackoverflow.com/questions/60909402/how-to-exclude-disable-redux-devtools-in-production-build-or-disconnect

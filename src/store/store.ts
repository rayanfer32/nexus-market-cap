import { configureStore } from '@reduxjs/toolkit'
import { isDev } from '@utils/getEnv'
import homepageReducer from '../views/Home/homepageSlice'

export const store = configureStore({
  reducer: {
    home: homepageReducer,
  },
  devTools: isDev,
})
export type RootState = ReturnType<typeof store.getState>
// * disable redux devtools in prod
// https://stackoverflow.com/questions/60909402/how-to-exclude-disable-redux-devtools-in-production-build-or-disconnect

import { createSlice } from '@reduxjs/toolkit'

const initialState = { showMenu: false }

const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    setShowMenu(state, action) {
      state.showMenu = action.payload
    },
  },
})

export const { setShowMenu } = homepageSlice.actions
export default homepageSlice.reducer

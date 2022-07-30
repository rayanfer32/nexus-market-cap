import { createSlice } from '@reduxjs/toolkit'

const initialState = { showMenu: false }

const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    setShowMenu(state, action) {
      state.showMenu = action.payload
      const body = document.querySelector('body')
      if (body) {
        body.setAttribute('data-overflow', action.payload)
      }
      return
    },
  },
})

export const { setShowMenu } = homepageSlice.actions
export default homepageSlice.reducer

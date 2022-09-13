import { createSlice } from '@reduxjs/toolkit'

export const consentsSlice = createSlice({
  name: 'consents',
  initialState: {
    data: [],
  },
  reducers: {
    addConsent: (state, action) => {
      console.log('addConsent', action.payload)
    },
  },
})

export const { addConsent } = consentsSlice.actions
export default consentsSlice.reducer

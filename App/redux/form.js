import { createSlice } from '@reduxjs/toolkit'

const formKeys = {
  firstName: 'firstName',
  language: 'language',
}

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    firstName: '',
    language: {},
  },
  reducers: {
    updateForm: (state, action) => {
      const { key, value } = action.payload
      console.log(key, value)
    },
  },
})

export { formKeys }
export const { updateForm } = formSlice.actions
export default formSlice.reducer

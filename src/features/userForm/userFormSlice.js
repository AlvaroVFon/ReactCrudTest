import { createSlice } from "@reduxjs/toolkit";
import userFormActions from './userForm.actions'

const initialState = {
  name: '',
  lastName: '',
  age:'',
  isOpen: false
}


export const userFormSlice = createSlice({
  name: 'userForm',
  initialState,
  reducers: {
    setName: userFormActions.setName,
    setLastName: userFormActions.setLastName,
    setAge: userFormActions.setAge,
    setIsOpen: userFormActions.setIsOpen
  }
})

export const { setName, setLastName, setAge, setIsOpen } = userFormSlice.actions
export default userFormSlice.reducer
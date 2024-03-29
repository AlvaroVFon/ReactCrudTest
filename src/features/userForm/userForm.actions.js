
const userFormActions = {
  setName: (state,action)=>{
    state.name = action.payload
  },
  setLastName: (state,action)=>{
    state.lastName = action.payload
  },
  setAge: (state,action)=>{
    state.age = action.payload
  },
  setIsOpen: (state,action)=>{
    state.isOpen = action.payload
  }
}

export default userFormActions
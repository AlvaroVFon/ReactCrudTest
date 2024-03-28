import { useState } from 'react'
import Button from './components/Button/Button'
import Table from './components/Table/Table'
import UserForm from './components/userForm/UserForm'
function App() {

  const [isUserFormOpen,setIsUserFormOpen] = useState(false)
  const handleOpenUserForm = () =>{
    setIsUserFormOpen(true)
  }
  return (
    
   <>
    <main className='grid grid-cols-9'>
      <Button text="Create New" className = {"text-xl py-3 bg-green-400 text-white rounded-md col-start-7 col-span-2 hover:bg-green-500 mt-12"} handleClick={setIsUserFormOpen}/>
      <UserForm isOpen={isUserFormOpen} onClose = {()=>{setIsUserFormOpen(false)}}/>
      <Table className="col-start-2 col-span-7 mt-6"/>     
    </main>
    </>
  )

}

export default App

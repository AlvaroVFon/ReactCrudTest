import { useState } from 'react'
import Button from './components/Button/Button'
import Table from './components/Table/Table'
import UserForm from './components/userForm/UserForm'


function App() {

  const [isUserFormOpen, setIsUserFormOpen] = useState(false)
  const handleOpenUserForm = () => {
    setIsUserFormOpen(true)
  }
  return (

    <>
      <div className='grid grid-cols-9'>
        <header className='flex items-center justify-center col-span-9'>
          <h1 className='text-4xl text-center font-bold p-6'>React + TailwindCSS + Redux Toolkit CRUD</h1>
          <Button text="Create New" type={`create`} className={"absolute -top-5 right-40 text-xl p-3 bg-green-400 text-white rounded-md col-start-7 col-span-2 hover:bg-green-500 mt-12"} handleClick={setIsUserFormOpen} />
        </header>

        <UserForm isOpen={isUserFormOpen} onClose={() => { setIsUserFormOpen(false) }} />

        <main className='grid grid-cols-9 col-span-9'>
          <Table className="col-start-2 col-end-9  mt-6 border" />
        </main>
      </div>
    </>
  )

}

export default App


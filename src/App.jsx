
import Button from './components/Button/Button'
import Table from './components/Table/Table'
import UserForm from './components/userForm/UserForm'
import { useSelector, useDispatch } from 'react-redux'
import { setIsOpen } from './features/userForm/userFormSlice'

function App() {

  const isUserFormOpen = useSelector((state) => state.userForm.isOpen)
  const dispatch = useDispatch()

  return (

    <>
      <div className='grid grid-cols-9'>
        <header className='flex items-center justify-center col-span-9'>
          <h1 className='text-4xl text-center font-bold p-6'>React + TailwindCSS + Redux Toolkit CRUD</h1>
          <Button text="Create New" type={`create`} className={"absolute -top-5 right-40 text-xl p-3 bg-green-400 text-white rounded-md col-start-7 col-span-2 hover:bg-green-500 mt-12"} handleClick={() => dispatch(setIsOpen(true))} />
        </header>

        <UserForm isOpen={isUserFormOpen} onClose={() => dispatch(setIsOpen(false))} method={'post'} />

        <main className='grid grid-cols-9 col-span-9'>
          <Table className="col-start-2 col-end-9  mt-6 border" />
        </main>
      </div>
    </>
  )

}

export default App


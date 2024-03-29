import Button from './Button'
import Table from './Table'

function App() {
  

  return (
    <>
      <main className='grid grid-cols-9 p-6'>
        <Button text="Create New" className = "text-xl py-3 bg-green-400 text-white rounded-md col-start-7 col-span-2 hover:bg-green-500"/>
        <Table className="col-start-2 col-span-7 mt-6"/>
      </main>
    </>
  )

}

export default App

import './UserForm.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const UserForm = ({isOpen,onClose})=>{

  
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    age: ''
  })
  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }
  const handleSubmit = (e)=>{
    const id = axios.get('https://dummyjson.com/users').then(res=>res.data.users.at(-1).id+1)
    axios.post(`https://dummyjson.com/users/${id}`, formData)
  }

 
  return(

     isOpen && 
     <div className="fixed grid w-screen h-screen place-items-center bg-black/90">
      <form onSubmit={handleSubmit} className={`flex flex-col bg-white/20 p-6 rounded-xl w-96 text-white`}>
        <h1 className={`text-2xl font-semibold text-white mb-5`}>Agregar Usuario</h1>
        <label htmlFor="name">Nombre:</label>
        <input type="text" name='name' value={formData.name} onChange={handleChange}/>
        <label htmlFor="lastName">Apellido: </label>
        <input type="text" name='lastName' value={formData.lastName} onChange={handleChange}/>
        <label htmlFor="">Edad</label>
        <input type="text" name='age' value={formData.age} onChange={handleChange}/>
        <div className="flex w-full justify-evenly mt-4">
          <button type='submit' className={`btn px-2 py-2 bg-green-400 hover:bg-green-500 text-white rounded-md font-semibold`}>Guardar</button>
          <button type="reset" className={`btn px-2 py-2 bg-red-300 hover:bg-red-400 rounded-md font-semibold text-white`} onClick={onClose}>Cancelar</button>
        </div>
      </form>

     </div>

  )
}

export default UserForm
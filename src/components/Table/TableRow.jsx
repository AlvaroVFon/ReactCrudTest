import './Table.css'
import Button from '../Button/Button'
import { deleteUser } from '../../scripts/getUsers'

export const TableRow = ({user})=>{
  
    return (
      <tr key={user.id} className={user.id%2===0?'bg-slate-200 p-10 text-center':'bg-slate-100 p-10 text-center'}>
        <td>{user.id}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.age}</td>
        <td>
        <Button text = "Edit" handleClick={()=>console.log('Hola Mundo')} className={`px-2 py-1 bg-yellow-300 hover:bg-yellow-400 rounded-md font-semibold text-white`}/>
        </td>
        <td>
        <Button text = "Delete" handleClick={ ()=>deleteUser(user.id) } className={`px-2 py-1 bg-red-300 hover:bg-red-400 rounded-md font-semibold text-white`}/>
        </td>
      </tr>
    )
}
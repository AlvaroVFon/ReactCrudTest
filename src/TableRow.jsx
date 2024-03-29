import './Table.css'
import Button from './Button'
import { deleteUser } from './scripts/functions'
export const TableRow = ({ user }) => {
  return (
    <tr key={user.id} className={user.id % 2 === 0 ? 'bg-slate-200 p-10 text-center' : 'bg-slate-100 p-10 text-center'}>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.age}</td>
      <td><Button text="Edit" className={`p-2 bg-yellow-200 rounded-md`} handleClick={() => deleteUser(user.id)} /></td>
      <td><Button text="delete" className={`p-2 bg-red-300 rounded-md`} /></td>
    </tr>
  )
}
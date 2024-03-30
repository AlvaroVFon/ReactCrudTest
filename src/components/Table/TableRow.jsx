import './Table.css'
import Button from '../Button/Button'
import { EditForm } from '../editForm/EditForm'
import { deleteUser } from '../../scripts/userActions'
import { setIsOpen } from '../../features/userForm/userFormSlice'

import { useSelector, useDispatch } from 'react-redux'

export const TableRow = ({ user }) => {

  const isOpen = useSelector((state) => state.userForm.isOpen)
  const dispatch = useDispatch()
  return (
    <>
      <tr key={user.id} className={'text-center border-b shadow-sm h-16 hover:bg-slate-100'}>
        <td className='font-semibold'>{user.id}</td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.email}</td>
        <td>
          <Button type="edit" handleClick={() => dispatch(setIsOpen(true))} className={`px-2 py-2 bg-yellow-300 hover:bg-yellow-400 rounded-md font-semibold text-white`} />
        </td>
        <td>
          <Button type="delete" text="Delete" handleClick={() => deleteUser(user.id)} className={`px-2 py-2 bg-red-300 hover:bg-red-400 rounded-md font-semibold text-white`} />
        </td>
      </tr>

      {isOpen && <EditForm user={user} />}
    </>
  )
}
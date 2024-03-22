import './Table.css'
export const TableRow = ({user})=>{
    return (
      <tr key={user.id} className={user.id%2===0?'bg-slate-300 p-10 text-center':'bg-slate-100 p-10 text-center'}>
        <td>{user.id}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.age}</td>
      </tr>
    )
}
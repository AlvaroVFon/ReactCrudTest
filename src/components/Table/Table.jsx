
import { TableTitles } from "./TableTitles"
import { TableRow } from "./TableRow"


const Table = ({ className, users }) => {


  return (

    <table className={className}>
      <TableTitles titles={["#", "First Name", "Last Name", "Email", "Edit", "Delete"]} />
      <tbody className="p-10">
        {users.map(user => <TableRow user={user} key={user.id} />)}
      </tbody>
    </table>
  )
}

export default Table
import { useEffect } from "react"
import { getUsers } from "../../scripts/userActions"
import { useState } from "react"
import { TableTitles } from "./TableTitles"
import { TableRow } from "./TableRow"


const Table = ({ className }) => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(data => {
      setUsers(data.users)
    })
  }, [])


  return (

    <table className={className}>
      <TableTitles titles={["#", "First Name", "Last Name", "Age", "Edit", "Delete"]} />
      <tbody className="p-10">
        {users.map(user => <TableRow user={user} key={user.id} />)}
      </tbody>
    </table>
  )
}

export default Table
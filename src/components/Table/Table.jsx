import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchData } from "../../features/dataFetch/dataFetchSlice"
import { TableTitles } from "./TableTitles"
import { TableRow } from "./TableRow"


const Table = ({ className }) => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  const users = useSelector(state => state.dataFetch.data)
  console.log(users)

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
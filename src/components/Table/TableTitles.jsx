import './Table.css'
export const TableTitles = ({titles})=>{
  return (
    <thead>
      <tr className="p-10">
        {titles.map((title, index)=><th key={index}>{title}</th>)}
      </tr>
    </thead>
  )
}

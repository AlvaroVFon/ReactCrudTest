import './Table.css'
export const TableTitles = ({ titles }) => {
  return (
    <thead>
      <tr className="bg-slate-800 text-white text-lg h-16">
        {titles.map((title, index) => <th key={index}>{title}</th>)}
      </tr>
    </thead >
  )
}

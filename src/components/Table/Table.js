import './table.css';

const Table = ({
    rows=[],
    columns=[]
})=>{
    return (
        <div className="responsive-table-container">
      <table>
        <thead>
          <tr>
            {columns.map(({field,headerName}) => (
              <th key={field}>{headerName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map(({field,headerName}) => (
                <td key={field} data-label={headerName}>
                  {row[field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}

export default Table;
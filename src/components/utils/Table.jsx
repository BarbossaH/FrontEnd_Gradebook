const Table = ({ data }) => {
  const columnNames = Object.keys(data[0]);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {columnNames.map((columnName) => (
            <th key={columnName}>{columnName.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columnNames.map((columnName) => (
              <td key={columnName}>{item[columnName]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;

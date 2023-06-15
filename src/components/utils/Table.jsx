const Table = ({ data, handleDelete, handleModify }) => {
  // console.log(handleDelete);
  if (!data.length) {
    return <p>No data</p>;
  }
  const columnNames = Object.keys(data[0]);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {columnNames.map((columnName) => (
            <th key={columnName}>{columnName.toUpperCase()}</th>
          ))}
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columnNames.map((columnName) => (
              <td key={columnName}>{item[columnName]}</td>
            ))}
            <td>
              <button
                className="btn btn-primary"
                onClick={() => handleModify(item.id)}
              >
                Modify
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;

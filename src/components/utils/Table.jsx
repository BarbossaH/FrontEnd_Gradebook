const Table = ({ data, handleDelete, handleModify, handleAdd }) => {
  if (!data.length) {
    return (
      <>
        <button className={'btn btn-primary'} onClick={handleAdd}>
          Add
        </button>
        <p>No data</p>
      </>
    );
  }
  const columnNames = Object.keys(data[0]);
  return (
    <>
      <button className={'btn btn-primary'} onClick={handleAdd}>
        Add
      </button>
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
                {columnNames.map((columnName) =>
                  columnName === 'mark' ? (
                    <button
                      key={columnName}
                      className="btn btn-primary"
                      onClick={() => {
                        console.log(item.id);
                      }}
                    >
                      Email
                    </button>
                  ) : (
                    ''
                  )
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Table;

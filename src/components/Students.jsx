import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './utils/Table';
import { useNavigate } from 'react-router-dom';
const Students = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleDelete = (id) => {
    console.log('delete data', id);
  };
  const handleModify = (id) => {
    navigate(`${id}/edit`);
    console.log('modify data', id);
  };
  useEffect(() => {
    setToken(localStorage.getItem('token'));
    if (token) {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/api/students/',
        headers: {
          Authorization: 'token ' + token,
        },
      };
      axios
        .request(config)
        .then((response) => {
          setStudents(response.data);
          setLoading(false);
          // console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table
          data={students}
          handleDelete={handleDelete}
          handleModify={handleModify}
        />
      )}
    </div>
  );
};
export default Students;

import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './utils/Table';
import { Link, useNavigate } from 'react-router-dom';

const Students = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
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
  };
  const handleDelete = (id) => {
    if (token) {
      let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `http://127.0.0.1:8000/api/students/${id}`,
        headers: {
          Authorization: 'token ' + token,
        },
      };
      axios
        .request(config)
        .then((response) => {
          // console.log(response.data);
          // setStudents(response.data);
          // setLoading(false);
          fetchData();
          // console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const handleModify = (id) => {
    navigate(`${id}/edit`);
  };

  const handleAdd = () => {
    if (students) {
      const keys = Object.keys(students[0]);
      if (keys.length > 0) navigate('add', { state: keys });
    }
  };

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    if (token) {
      fetchData();
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
          handleAdd={handleAdd}
        />
      )}
    </div>
  );
};
export default Students;

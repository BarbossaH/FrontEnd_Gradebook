import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './utils/Table';
import { useNavigate } from 'react-router-dom';

const keys = ['code', 'name', 'semesters'];
const Course = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [course, setCourse] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:8000/api/course/',
      headers: {
        Authorization: 'token ' + token,
      },
    };
    axios
      .request(config)
      .then((response) => {
        setCourse(response.data);
        console.log(response.data);
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
        url: `http://127.0.0.1:8000/api/course/${id}`,
        headers: {
          Authorization: 'token ' + token,
        },
      };
      axios
        .request(config)
        .then((response) => {
          fetchData();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const handleAdd = () => {
    navigate('add', { state: keys });
  };
  const handleModify = (id) => {
    navigate(`${id}/edit`);
  };
  useEffect(() => {
    setToken(localStorage.getItem('token'));

    // const axios = require('axios');
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
          data={course}
          handleDelete={handleDelete}
          handleModify={handleModify}
          handleAdd={handleAdd}
        />
      )}
    </div>
  );
};
export default Course;

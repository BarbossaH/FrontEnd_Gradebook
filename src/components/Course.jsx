import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './utils/Table';
const Course = () => {
  const [token, setToken] = useState('');
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = (id) => {
    console.log('delete data', id);
  };
  const handleModify = (id) => {
    console.log('modify data', id);
  };
  useEffect(() => {
    setToken(localStorage.getItem('token'));

    // const axios = require('axios');
    if (token) {
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
          data={course}
          handleDelete={handleDelete}
          handleModify={handleModify}
        />
      )}
    </div>
  );
};
export default Course;

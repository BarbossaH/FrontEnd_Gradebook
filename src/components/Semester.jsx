import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './utils/Table';
const Semester = () => {
  const [token, setToken] = useState('');
  const [semester, setSemester] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setToken(localStorage.getItem('token'));

    // const axios = require('axios');
    if (token) {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/api/semester/',
        headers: {
          Authorization: 'token ' + token,
        },
      };
      axios
        .request(config)
        .then((response) => {
          setSemester(response.data);
          setLoading(false);
          // console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);

  return <div>{loading ? <p>Loading...</p> : <Table data={semester} />}</div>;
};
export default Semester;

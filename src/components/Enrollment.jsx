import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './utils/Table';
import { useNavigate } from 'react-router-dom';
const Enrollment = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [enrollment, setEnrollment] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    console.log(token);
    // const axios = require('axios');
    if (token) {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/api/studentenrollment/',
        headers: {
          Authorization: 'token ' + token,
        },
      };
      axios
        .request(config)
        .then((response) => {
          setEnrollment(response.data);
          setLoading(false);
          // console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);
  // {console.log(enrollment);}

  return <div>{loading ? <p>Loading...</p> : <Table data={enrollment} />}</div>;
};
export default Enrollment;

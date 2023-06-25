import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './utils/Table';
import { useNavigate } from 'react-router-dom';

const keys = [
  'enrolled_class',
  'enrolled_student',
  'enrollTime',
  'gradeTime',
  'marks',
];
const Enrollment = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [enrollment, setEnrollment] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = () => {
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
        url: `http://127.0.0.1:8000/api/studentenrollment/${id}`,
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
  const handleModify = (id) => {
    navigate(`${id}/edit`);
  };
  const handleAdd = () => {
    navigate('add', { state: keys });
  };
  useEffect(() => {
    setToken(localStorage.getItem('token'));
    console.log(token);
    // const axios = require('axios');
    if (token) {
      fetchData();
    }
  }, [token]);
  // {console.log(enrollment);}

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table
          data={enrollment}
          handleDelete={handleDelete}
          handleModify={handleModify}
          handleAdd={handleAdd}
        />
      )}
    </div>
  );
};
export default Enrollment;

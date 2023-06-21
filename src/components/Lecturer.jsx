import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './utils/Table';
import { useNavigate } from 'react-router-dom';
// import FormForEditor from './utils/FormForEditor';
const keys = ['username', 'first_name', 'last_name', 'course', 'email', 'DOB'];
const Lecturers = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [lecturers, setLecturers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setEditing] = useState(false);

  const fetchData = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:8000/api/lecturers/',
      headers: {
        Authorization: 'token ' + token,
      },
    };
    axios
      .request(config)
      .then((response) => {
        setLecturers(response.data);
        console.log(response.data);
        setLoading(false);
        // console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAdd = () => {
    navigate('add', { state: keys });
  };

  const handleDelete = (id) => {
    if (token) {
      let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `http://127.0.0.1:8000/api/lecturers/${id}`,
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
    setEditing(!isEditing);
  };

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    // const axios = require('axios');
    if (token) fetchData();
  }, [token]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table
          data={lecturers}
          handleDelete={handleDelete}
          handleModify={handleModify}
          handleAdd={handleAdd}
        />
      )}
      {/* {isEditing && <FormForEditor />} */}
    </div>
  );
};
export default Lecturers;

import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './utils/Table';
import { useNavigate } from 'react-router-dom';
// import FormForEditor from './utils/FormForEditor';
const Lecturers = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [lecturers, setLecturers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setEditing] = useState(false);

  const handleDelete = (id) => {
    console.log('delete data', id);
  };
  const handleModify = (id) => {
    navigate(`${id}/edit`);
    console.log('modify data', id);
    setEditing(!isEditing);
  };

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    // const axios = require('axios');
    if (token) {
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
          data={lecturers}
          handleDelete={handleDelete}
          handleModify={handleModify}
        />
      )}
      {/* {isEditing && <FormForEditor />} */}
    </div>
  );
};
export default Lecturers;

import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './utils/Table';
import { useNavigate } from 'react-router-dom';

const keys = ['semester', 'course', 'lecturer'];
const Class = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:8000/api/class/',
      headers: {
        Authorization: 'token ' + token,
      },
    };
    axios
      .request(config)
      .then((response) => {
        setClasses(response.data);
        setLoading(false);
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
        url: `http://127.0.0.1:8000/api/class/${id}`,
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

    // const axios = require('axios');
    if (token) {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/api/class/',
        headers: {
          Authorization: 'token ' + token,
        },
      };
      axios
        .request(config)
        .then((response) => {
          setClasses(response.data);
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
          data={classes}
          handleDelete={handleDelete}
          handleModify={handleModify}
          handleAdd={handleAdd}
        />
      )}
    </div>
  );
};
export default Class;

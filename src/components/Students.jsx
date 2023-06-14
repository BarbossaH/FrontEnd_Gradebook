import axios from 'axios';
import { useEffect, useState } from 'react';
const Students = () => {
  const [token, setToken] = useState('');
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setToken(localStorage.getItem('token'));

    // const axios = require('axios');
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
        <>
          {students.map((student) => {
            console.log(student);
            return <p key={student.id}>{student.first_name}</p>;
          })}
        </>
      )}
    </div>
  );
};
export default Students;

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(''); // [1
  const navigate = useNavigate();
  useEffect(() => {
    setToken(localStorage.getItem('token'));
    // if (token) {
    //   // console.log(12323);
    //   alert('You are already logged in');
    // }
  }, [token]);

  const handlerUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlerPassword = (event) => {
    setPassword(event.target.value);
  };

  function login() {
    // const axios = require('axios');
    let data = JSON.stringify({
      username: 'Julian',
      password: 'xuexih123',
    });
    let config = {
      method: 'POST',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:8000/auth/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.token));
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logout() {
    localStorage.removeItem('token');
    setToken('');
  }
  return (
    <div>
      <p>
        Username:
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={handlerUsername}
        />
      </p>
      <p>
        Password:
        <input type="password" value={password} onChange={handlerPassword} />
      </p>
      {token ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};
export default Login;

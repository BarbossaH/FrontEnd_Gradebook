import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadFile = () => {
  const [token, setToken] = useState('');
  const [fileData, setFileData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [token]);

  const handleFile = (e) => {
    setFileData(e.target.files[0]);
  };

  const handleUpload = () => {
    if (fileData && token) {
      const formData = new FormData();
      formData.append('file', fileData);
      console.log(token);

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/api/upload/',
        headers: {
          Authorization: 'token ' + token,
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
      };
      axios.request(config).then((response) => {
        console.log(response.data);
        navigate('/students');
      });
    }
  };

  return (
    <div>
      <h2>Upload the student file</h2>
      <input type="file" name="file" onChange={handleFile} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};
export default UploadFile;

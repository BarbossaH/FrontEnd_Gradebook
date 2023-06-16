import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';

function FormForEditor({ type }) {
  const { id } = useParams();
  console.log(id, type);

  const [data, setData] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setToken(localStorage.getItem('token'));

    if (token) {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://127.0.0.1:8000/api/${type}/${id}/`,
        headers: {
          Authorization: 'token ' + token,
        },
      };

      axios
        .request(config)
        .then((response) => {
          setData(response.data);

          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);

  let keys = [];
  if (data) {
    keys = Object.keys(data);
  }
  console.log(data);

  return (
    <div>
      {loading ? (
        <p>loading....</p>
      ) : (
        <Form>
          {data &&
            keys.map((key) => (
              <Form.Group className="mb-3" key={key}>
                <Form.Label>{key.toUpperCase()}</Form.Label>
                <Form.Control
                  type="email"
                  onChange={(e) => {
                    // console.log(data);
                    console.log(e.target.value);
                    data[key] = e.target.value;
                    setData({ ...data, [key]: data[key] });
                  }}
                  // placeholder="Enter email"
                  value={data[key] ? data[key] : ''}
                  disabled={key === 'id' || key === 'username'}
                />
              </Form.Group>
            ))}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
}

export default FormForEditor;

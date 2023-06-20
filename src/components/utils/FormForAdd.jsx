import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
const FormForAdd = ({ type }) => {
  const fields = useLocation().state;
  // const ddsa = useLocation().pathname;
  // console.log(ddsa);

  if (fields?.length <= 0) return <p>There is fields.</p>;
  const obj = Object.fromEntries(
    fields
      .map((key) => {
        if (key === 'id') {
          return undefined;
        } else {
          return [key, ''];
        }
      })
      .filter(Boolean) //filter id
  );
  // console.log(obj);
  const [data, setData] = useState(obj);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setToken(localStorage.getItem('token'));
  });

  const canSubmit = Object.values(data).every((value) => {
    // console.log(value);
    return value !== '';
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (token) {
      // console.log(data);
      const config = {
        method: 'POST',
        maxBodyLength: Infinity,
        url: `http://127.0.0.1:8000/api/${type}/`,
        headers: {
          Authorization: 'token ' + token,
        },
        data: data,
      };
      axios
        .request(config)
        .then(function (response) {
          console.log(response.data);
          navigate(-1);
          // console.log(JSON.stringify(response.data));
          // navigate(`/${type}/`);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <Form>
        {fields.map(
          (field) =>
            field !== 'id' && (
              <Form.Group key={field} className="mb-3" field={field}>
                <Form.Label>{field.toUpperCase()}</Form.Label>
                <Form.Control
                  type={
                    field === 'email'
                      ? 'email'
                      : field === 'DOB'
                      ? 'date'
                      : 'text'
                  }
                  // value={data[field]}
                  onChange={(e) => {
                    // console.log(data);
                    // console.log(e.target.value);
                    setData({ ...data, [field]: e.target.value });
                  }}
                  value={data[field] ? data[field] : ''}
                />
              </Form.Group>
            )
        )}
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}
          disabled={!canSubmit}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default FormForAdd;

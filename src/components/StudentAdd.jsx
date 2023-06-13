import { useEffect, useState } from 'react';

const StudentAdd = () => {
  const [token, setToken] = useState('');
  useEffect(setToken(localStorage));
  return <div>StudentAdd</div>;
};
export default StudentAdd;

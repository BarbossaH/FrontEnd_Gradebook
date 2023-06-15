// import './App.css';
import Layout from './components/Layout';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Students from './components/Students';
import UploadFile from './components/UploadFile';
import Login from './components/Login';
import Lecturers from './components/Lecturer';
import Semester from './components/Semester';
import Class from './components/Class';
import Enrollment from './components/Enrollment';
import Course from './components/Course';
import { useEffect, useState } from 'react';
// import Nav from './components/Nav';
function App() {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    } else {
      navigate('/login');
    }
  }, []);
  return (
    <div className="container">
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/">
            <Route index element={<Enrollment />} />
            <Route path="upload" element={<UploadFile />} />
            <Route path="/students" element={<Students />} />
            <Route path="/lecturers" element={<Lecturers />} />
            <Route path="/semester" element={<Semester />} />
            <Route path="/class" element={<Class />} />
            <Route path="/enrollment" element={<Enrollment />} />
            <Route path="/course" element={<Course />} />
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

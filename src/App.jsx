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
import FormForEditor from './components/utils/FormForEditor';
import FormForAdd from './components/utils/FormForAdd';
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
          {/* <Route path="/add" element={<FormForAdd />} /> */}

          <Route path="/">
            <Route index element={<Enrollment />} />
            <Route path="upload" element={<UploadFile />} />
            <Route path="/students/">
              <Route index element={<Students />} />
              <Route
                path=":id/edit"
                element={<FormForEditor type="students" />}
              />
              <Route path="add" element={<FormForAdd type="addstudent" />} />
            </Route>

            <Route path="/lecturers/">
              <Route index element={<Lecturers />} />
              <Route
                path=":id/edit"
                element={<FormForEditor type="lecturers" />}
              />
              <Route path="add" element={<FormForAdd type="addlecturer" />} />
            </Route>
            <Route path="/semester">
              <Route index element={<Semester />} />
              <Route
                path=":id/edit"
                element={<FormForEditor type="semester" />}
              />
              <Route path="add" element={<FormForAdd type="addsemester" />} />
            </Route>

            <Route path="/class">
              <Route index element={<Class />} />
              <Route path=":id/edit" element={<FormForEditor type="class" />} />
              <Route path="add" element={<FormForAdd type="addclass" />} />
            </Route>

            <Route path="/studentenrollment">
              <Route index element={<Enrollment />} />
              <Route
                path=":id/edit"
                element={<FormForEditor type="studentenrollment" />}
              />
              <Route
                path="add"
                element={<FormForAdd type="addstudentenrollment" />}
              />
            </Route>
            <Route path="/course">
              <Route index element={<Course />} />
              <Route
                path=":id/edit"
                element={<FormForEditor type="course" />}
              />
              <Route path="add" element={<FormForAdd type="addcourse" />} />
            </Route>
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

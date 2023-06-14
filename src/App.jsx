// import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Students from './components/Students';
import UploadFile from './components/UploadFile';
import Login from './components/Login';

// import Nav from './components/Nav';
function App() {
  return (
    <div className="container">
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="upload" element={<UploadFile />} />
        <Route path="/students" element={<Students />} />
      </Routes>
      {/* </Layout> */}
    </div>
  );
}

export default App;

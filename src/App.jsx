// import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';

// import Nav from './components/Nav';
function App() {
  return (
    <div className="container">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

import { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
const Menu = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(localStorage.getItem('token'));
  });
  const removeToken = () => {
    setToken(localStorage.removeItem('token'));
    navigate('/login');
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">GradeBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/lecturers">Lecturer</Nav.Link>
            <Nav.Link href="/students">Students</Nav.Link>
            <Nav.Link href="/semester">Semester</Nav.Link>
            <Nav.Link href="/class">Class</Nav.Link>
            <Nav.Link href="/studentenrollment">Enrollment</Nav.Link>
            <Nav.Link href="/course">Course</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {token && (
          <button type="button" onClick={removeToken}>
            Logout
          </button>
        )}
      </Container>
    </Navbar>
  );
};
export default Menu;

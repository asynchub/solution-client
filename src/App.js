import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Routes from './Routes';
import './App.css';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

function App() {
  return (
    <div className='App container'>
      <Navbar expand='sm' variant="light">
        <Container>
          <Navbar.Brand>
            <Link to='/'>
              Solution
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to='/'>
              Your Name
            </Nav.Link>
            <NavDropdown title='Services'>
              <DropdownItem>Sport</DropdownItem>
              <DropdownItem>Adventure</DropdownItem>
              <DropdownItem>Local products</DropdownItem>
            </NavDropdown>
            <Nav.Link as={Link} to='/'>
              Benefits
            </Nav.Link>
          </Nav>
          <Nav>
            <LinkContainer to='/signup' className='mr-sm-2'>
              <Button>Signup</Button>
            </LinkContainer>
            <LinkContainer to='/login'>
              <Button variant='outline-primary'>Login</Button>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;

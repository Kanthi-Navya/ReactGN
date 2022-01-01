import React from 'react';
import { Nav, Navbar, Form, FormControl,Container,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
return(
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#" className="topHead">Tract.</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1" className="navListitem">Category</Nav.Link>
        <Nav.Link href="#action2" className="navListitem">Tract For Business</Nav.Link>
        <Nav.Link href="#action3" className="navListitem">Teach on Tract</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <input type="search"
          placeholder="Search......"
          aria-label="Search"
        />
        <button className="btn" type="button">
           <FontAwesomeIcon icon={faSearch} />
         </button>
      </Form>
    </Navbar.Collapse>
    <Button className="signupBtn">Sign up</Button>
  </Container>
</Navbar>
);
}
export default Header;




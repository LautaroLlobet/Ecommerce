import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <h1>Games Ball Z</h1>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Inicio
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/ps2">
            PS2
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/ps3">
            PS3
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/ps4">
            PS4
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/ps5">
            PS5
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

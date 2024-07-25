import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";

export const Menu = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <h1>Tienda de Camaras</h1>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Lentes</Nav.Link>
          <Nav.Link href="#features">Camaras</Nav.Link>
          <Nav.Link href="#pricing">Accesorios</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

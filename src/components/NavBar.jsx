import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  const loc = useLocation();
  const isActive = (path) => loc.pathname === path;

  return (
    <Navbar expand="sm" bg="dark" variant="dark" className="nav">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="w-100 justify-content-evenly text-center"
            navbarScroll
          >
            <Nav.Link
              as={Link}
              to="/"
              style={{ color: isActive("/") ? "orange" : "white" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              style={{ color: isActive("/about") ? "orange" : "white" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/service"
              style={{ color: isActive("/service") ? "orange" : "white" }}
            >
              Service
            </Nav.Link>
            <Navbar.Text
              style={{
                color: "white",
                fontSize: "x-large",
                fontFamily: "Anta, sans-serif",
                fontWeight: 400,
                backgroundColor: "rgb(243, 123, 59)",
                borderRadius: "30px",
                padding: "0 10px",
              }}
            >
              SRRI
            </Navbar.Text>
            <Nav.Link
              as={Link}
              to="/resume"
              style={{ color: isActive("/resume") ? "orange" : "white" }}
            >
              Resume
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/project"
              style={{ color: isActive("/project") ? "orange" : "white" }}
            >
              Project
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              style={{ color: isActive("/contact") ? "orange" : "white" }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

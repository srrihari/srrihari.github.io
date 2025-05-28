import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  const loc = useLocation();
  const isActive = (path) => loc.pathname === path;

  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => setExpanded(false);

  return (
    <Navbar
      expand="sm"
      bg="dark"
      variant="dark"
      expanded={expanded}
      onToggle={() => setExpanded((prev) => !prev)}
      className="nav"
    >
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
              onClick={handleNavClick}
              style={{ color: isActive("/") ? "orange" : "white" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={handleNavClick}
              style={{ color: isActive("/about") ? "orange" : "white" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/service"
              onClick={handleNavClick}
              style={{ color: isActive("/service") ? "orange" : "white" }}
            >
              Service
            </Nav.Link>

            {!expanded && (
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
            )}

            <Nav.Link
              as={Link}
              to="/resume"
              onClick={handleNavClick}
              style={{ color: isActive("/resume") ? "orange" : "white" }}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/project"
              onClick={handleNavClick}
              style={{ color: isActive("/project") ? "orange" : "white" }}
            >
              Project
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={handleNavClick}
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

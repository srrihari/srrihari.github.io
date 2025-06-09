import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  const loc = useLocation();
  const isActive = (path) => loc.pathname === path;

  const [expanded, setExpanded] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  const handleNavClick = () => setExpanded(false);

  useEffect(() => {
    if (expanded) {
      setShowLogo(false);
    } else {
      const timer = setTimeout(() => setShowLogo(true), 300);
      return () => clearTimeout(timer);
    }
  }, [expanded]);

  return (
    <Navbar
      expand="sm"
      variant="dark"
      expanded={expanded}
      onToggle={() => setExpanded((prev) => !prev)}
      className="nav position-relative"
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* SRRI logo centered and visible only when not expanded */}
        {showLogo && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1,
            }}
          >
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
          </div>
        )}

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="w-100 justify-content-evenly text-center align-items-center"
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

            {/* Placeholder to keep spacing when SRRI is outside the DOM flow */}
            <div style={{ width: "80px" }} />

            <Nav.Link
              as={Link}
              to="/activities"
              onClick={handleNavClick}
              style={{ color: isActive("/activities") ? "orange" : "white" }}
            >
              Activities
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

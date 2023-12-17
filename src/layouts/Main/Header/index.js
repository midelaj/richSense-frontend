import { Container, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

import logo from "assests/images/logo.png";

const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <img src={logo} height={50} />
      </a>

      <Nav className="nav-pills">
        <Nav.Item>
          <Nav.Link
            exact
            as={NavLink}
            to="/"
            className="nav-link"
            aria-current="page"
          >
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/advisors" className="nav-link">
            Advisors
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="nav-link">
            Login
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/signup" className="nav-link">
            Signup
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Header;

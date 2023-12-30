import { Container, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { toast } from "react-toastify";

import logo from "assests/images/logo.jpeg";
import useAuth from "hooks/useAuth";
import { setToken } from "utils/storage";

const Header = () => {
  const { isLoggedIn, setAuth } = useAuth();
  const signOut = () => {
    setAuth({
      isLoggedIn: false,
      user: null,
    });
    toast.success("Logged out successfully");
    setToken("");
  };

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
          <Nav.Link as={NavLink} to="/expenses" className="nav-link">
            Expense
          </Nav.Link>
          <Nav.Link as={NavLink} to="/goals" className="nav-link">
            Goals
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <div className="text-end">
            {isLoggedIn ? (
              <Nav.Link onClick={signOut}>signout</Nav.Link>
            ) : (
              // toast.success("Logged in successfully")

              <div>
                <button>
                  <Nav.Link as={NavLink} to="/signin" className="nav-link">
                    Signin
                  </Nav.Link>
                </button>
                <Nav.Item>
                  <Nav.Link as={Link} to="/signup" className="nav-link">
                    Signup
                  </Nav.Link>
                </Nav.Item>
              </div>
            )}
          </div>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Header;

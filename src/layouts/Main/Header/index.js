import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import useAuth from "hooks/useAuth";
import { setToken } from "utils/storage";


import logo from "assets/images/logo.jpeg";
import { profile_img } from "components/imagePath";




const Header = () => {
  const [drops, setDrops] = useState(false);
  const { isLoggedIn, setAuth, user } = useAuth();
  const signOut = () => {
    setAuth({
      isLoggedIn: false,
      user: null,
    });
    toast.success("Logged out successfully");
    setToken("");
  };
  return (
    <header className="header header-four">
      <div className="container">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <Link id="mobile_btn" to="javascript:void(0);">
              <span className="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </Link>
            <Link to="/" className="navbar-brand logo">
              <img src={logo} className="img-fluid" alt="Logo" style={{
                maxHeight: '70px'
              }}/>
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="/" className="menu-logo">
                <img src={logo} className="img-fluid" alt="Logo" style={{
                maxHeight: '70px'
              }}/>
              </Link>
              <Link
                id="menu_close"
                className="menu-close"
                to="javascript:void(0);"
              >
                {" "}
                <i className="fas fa-times"></i>
              </Link>
            </div>
            <ul className="main-nav">
          
            
              <li>
                <NavLink to="/advisors"> Advisors</NavLink>
              </li>
              <li>
                <NavLink to="/expenses"> Expenses</NavLink>
              </li>
              <li>
                <NavLink to="/goals">Goals</NavLink>
              </li>
              <li className="login-link">
                <Link to="signup.html">Sign Up</Link>
              </li>
            </ul>
            <ul className="nav header-navbar-rht nav">
            {!isLoggedIn ? (
              <>
              <li className="nav-item">
                <NavLink className="nav-link header-reg" to="/signup">
                  Sign Up
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-login" to="/signin">
                  Sign In
                </Link>
              </li>
              </> )
              : (
                <li className="nav-item dropdown has-arrow logged-item">
                <Link
                  to="#"
                  className={`${
                    drops === true
                      ? "dropdown-toggle profile-userlink show "
                      : "dropdown-toggle profile-userlink"
                  }`}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() => setDrops(!drops)}
                  // className={`${change1===true ? 'dropdown-menu dropdown-menu-end show' : "dropdown-menu dropdown-menu-end"}`}
                >
                  <img src={profile_img} alt="" />
                  <span>{user.email.split("@")[0]}</span>
                </Link>
                <div className="dropdown-menu dropdown-menu-end">
                  <Link className="dropdown-item" to="/appointments">
                    Appointments
                  </Link>
                  <Link className="dropdown-item" onClick={signOut}>
                    Logout
                  </Link>
                </div>
              </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

//libraries
import { NavLink } from "react-router-dom";
//images
import logo from "../../img/tokendog.svg";
import { AuthContext } from "../../App";
import React, { useContext } from "react";
const Header = (props) => {
  const starTop = props.withStarImage === false ? null : "starTop";
  const { state, dispatch } = useContext(AuthContext);
  const { logged } = state;
  return (
    <div className={`container-fluid ${starTop}`}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container topNav">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="Coin Dogs"></img>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarSupportedContent"
          >
            <nav className="navbar-nav mb-2 mb-lg-0">
              <NavLink
              to="/buy"
              className="nav-link"
              aria-disabled="true"
             >
               Buy
               </NavLink>
              <NavLink
                to="/convertNTF"
                className="nav-link"
                tabIndex="-1"
                aria-disabled="true"
              >
                Start
              </NavLink>
              {logged && (
                <NavLink
                  to="/my-dogs"
                  className="nav-link"
                  aria-disabled="true"
                >
                  My dogs
                </NavLink>
              )}
              <NavLink to="/market" className="nav-link" aria-disabled="true">
                Market
              </NavLink>
              {logged && (
                <NavLink
                  to="/settings"
                  className="nav-link"
                  aria-disabled="true"
                >
                  Settings
                </NavLink>
              )}
              {logged && (
                <NavLink
                  to="/transactions"
                  className="nav-link"
                  aria-disabled="true"
                >
                  Transactions
                </NavLink>
              )}
              {!logged && (
                <NavLink
                  to="/login"
                  className="nav-link"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Login
                </NavLink>
              )}

              {logged && (
                <NavLink
                  onClick={() => dispatch({ type: "logout" })}
                  to="/"
                  className="nav-link"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Logout
                </NavLink>
              )}
              <NavLink
                to="/"
                className="nav-link"
                tabIndex="-1"
                aria-disabled="true"
              >
                FAQ
              </NavLink>
              {/* <NavLink
                to="/convertNTF"
                className="nav-link"
                tabIndex="-1"
                aria-disabled="true"
              >
                Convert NTF
              </NavLink> */}
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

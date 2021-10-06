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
          <div className="navbar-header-social">
            
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

            <div class="top-social-links">
              <a href="https://www.instagram.com/token_dog/" target="_blank" class="scroll-to"><i class="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/gaming/Token.Dogs" target="_blank" class="scroll-to"><i class="fab fa-facebook-square"></i></a>
              <a href="https://twitter.com/TokenDogs" target="_blank" class="scroll-to"><i class="fab fa-twitter"></i></a>
              <a href="https://t.me/tokendogs" target="_blank" class="scroll-to"><i class="fab fa-telegram-plane"></i></a>
              <a href="https://discord.gg/dqxnRnBm" target="_blank" class="scroll-to"><i class="fab fa-discord"></i></a>
              {/* <a href="https://www.linkedin.com/company/20171544" target="_blank" class="scroll-to"><i class="fab fa-linkedin"></i></a> */}
              {/* <a href="https://www.pinterest.com/coindogs_game" target="_blank" class="scroll-to"><i class="fab fa-pinterest-square"></i></a> */}
              {/* <a href="https://medium.com/coindogs-game"><i class="fab fa-medium"></i></a> */}
            </div>
          </div>
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

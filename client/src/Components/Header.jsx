import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../Components/context/auth";

const Header = () => {
  const [auth, setAuth] = useAuth();
  //   const categories = useCategory();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: null,
    });
    localStorage.removeItem("auth");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <NavLink
              to="/"
              className="navbar-brand"
              href="#"
              style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}
            ></NavLink>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  style={{ color: "white" }}
                  to="/home"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </NavLink>
              </li>

              {!auth.user ? (
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-link"
                    style={{ color: "white" }}
                  >
                    {/* <button type="button" class="btn btn-primary"> */}
                    Login
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    // style={{ backgroundColor:: "black" }}
                    style={{
                      color: "white",
                      marginTop: "16px",
                      /* margin-left: -2px; */
                      marginRight: "67px",
                      border: "none",
                    }}
                  >
                    {auth?.user?.name}
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        style={{ backgroundColor: "white", color: "black" }}
                        to={`/dashboard/${
                          auth?.user?.role === 1 ? "admin" : "user"
                        }`}
                        // to="/dashboard/admin"
                        className="dropdown-item"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/home"
                        className="nav-link"
                        style={{ color: "white" }}
                        onClick={handleLogout}
                      >
                        <button type="button" class="btn btn-primary">
                          Logout
                        </button>
                      </NavLink>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

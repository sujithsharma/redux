import { Link, Outlet, useNavigate } from "react-router-dom";
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const matchedUserString = localStorage.getItem("matchedUser");
  const parsedMatchedUser = JSON.parse(matchedUserString);

  const logout = () => {
    localStorage.removeItem("matchedUser");
    localStorage.removeItem("isAuth");
    navigate("/");
  };
  return (
    <div>
      <Navbar className="navbarheight" bg="primary" variant="dark" expand="lg">
        <Navbar.Brand>User Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="icon">
            <Nav.Link>
              <NavDropdown
                title={
                  <>
                    <span className="mr-2">{parsedMatchedUser.username}</span>
                    <FontAwesomeIcon icon={faUser} />
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link
                    to="/dashboard/profile"
                    className="text-dark no-underline"
                  >
                    My Profile
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className="text-dark no-underline"
                    to="/dashboard/settings"
                  >
                    Settings
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container-fluid">
        <div className="row ">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-info">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <div
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline">Menu</span>
              </div>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <div className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house"></i>{" "}
                    <Link className="text-white no-underline" to="/dashboard">
                      Home
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table"></i>{" "}
                    <Link
                      className="text-white no-underline"
                      to="/dashboard/profile"
                    >
                      Profile
                    </Link>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle "
                  >
                    <i className="fs-4 bi-bootstrap"></i>{" "}
                    <Link
                      className="text-white no-underline"
                      to="/dashboard/settings"
                    >
                      Settings
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col py-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

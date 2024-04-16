import React, { useContext } from "react";
import ThemeContext from "../context/theme/ThemeContext";

const Navbar = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <nav
        className={
          darkMode
            ? "navbar navbar-expand-lg bg-dark text-light shadow"
            : "navbar navbar-expand-lg bg-body-tertiary"
        }>
        <div className="container-fluid">
          <a className={darkMode ? "navbar-brand text-light" : "navbar-brand"} href="#">
            News App
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={darkMode ? "nav-link active text-light" : "nav-link active"} aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

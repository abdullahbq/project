import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      aria-label="Fifth navbar example"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          PROJECT2022
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample05">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="btn text-danger fw-bold">
              <Link className="text-warning fw-bold" to="/">
                Home
              </Link>
            </li>
            <li className="btn text-danger fw-bold">
              <Link className="text-warning fw-bold" to="/about">
                About
              </Link>
            </li>
            <li className="btn text-danger fw-bold">
              <Link className="text-warning fw-bold" to="/contact">
                Contact
              </Link>
            </li>
            <li className="btn text-danger fw-bold">
              <Link className="text-warning  fw-bold" to="/blog">
                Blog
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="dropdown05" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul className="dropdown-menu" aria-labelledby="dropdown05">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li> */}
          </ul>
          <form>
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header

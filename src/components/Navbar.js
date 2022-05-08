import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-body rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            It'S <img src="https://img.icons8.com/doodle/48/000000/pizza--v1.png"/>pIzZaH
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" aria-current="page" href="#">
                Login
              </a>
              <a className="nav-link" href="#">
                Cart
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="https://example.com/tuhttps://media.licdn.com/dms/image/C4E03AQGa0x8EnJYBcw/profile-displayphoto-shrink_800_800/0/1601359183832?e=2147483647&v=beta&t=_jzcyPqjlQhGjg6uzHjZB5sgM1nDhkckIewCw-dWJeQ-logo.png" alt="Logo" width="50" height="50" className="d-inline-block align-middle mr-2" /> SuccesObject
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#carousel">Carrusel</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">Servicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#register">Registrarse</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

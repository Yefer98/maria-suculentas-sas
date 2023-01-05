import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <NavLink to={"/"} className="navbar-brand">
          <Logo />
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link" aria-current="page">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/control"} className="nav-link">
                Control proveedores
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tipos de plantas
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to={"/exterior"} className="nav-link nav-link2">
                    Para el exterior
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/interior"} className="nav-link nav-link2">
                    Para el interior
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/cactus"} className="nav-link nav-link2">
                    Cactus
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 sesion">
          <li className="nav-item">
            <NavLink to={"/sesion"} className="nav-link">
              <i class="fa-solid fa-right-to-bracket"></i> Iniciar sesión
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/registro"} className="nav-link">
              <i class="fa-solid fa-user"></i> Registrarse
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

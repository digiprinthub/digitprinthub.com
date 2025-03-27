import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";

const Navbar = () => {
  const cartItems = useSelector((state) => state.handleCart);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-2 sticky-top">
      <div className="container-lg">
        {/* Branding */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Company Logo" width="40" className="me-2" />
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Items */}
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="mainNavigation"
        >
          <div className="navbar-nav mx-auto mb-2 mb-lg-0">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link px-3 ${
                  isActive ? "active fw-bold" : "text-secondary"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `nav-link px-3 ${
                  isActive ? "active fw-bold" : "text-secondary"
                }`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link px-3 ${
                  isActive ? "active fw-bold" : "text-secondary"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link px-3 ${
                  isActive ? "active fw-bold" : "text-secondary"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Action Buttons */}
          <div className="d-flex align-items-center gap-3">
            <NavLink
              to="/cart"
              className="btn btn-link text-dark position-relative text-decoration-none"
              aria-label="Cart"
            >
              <i className="fas fa-shopping-bag fs-5"></i>
              {cartItems.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItems.length}
                  <span className="visually-hidden">items in cart</span>
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

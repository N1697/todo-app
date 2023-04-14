import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">DO IT!</Link>
      </div>

      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt /> Login
          </Link>
        </li>

        <li>
          <Link to="/register">
            <FaUserAlt /> Register
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

import React from 'react';

export const Navbar = ({ logo }) => {
  return (
    <div className="navbar clearfix">
      <img className="navbar-logo" src={logo} alt="Logo" />
      <nav className="navbar-menu">
        <ul>
          <li className="navbar-menu-items">
            <button className="btn ">Sign Out</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

import React from 'react';
import './Header.css';

const headersection =() => {
    return(
        <nav className="navbar navbar-expand-sm bg-primary navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Blog</a>
          </li>
        </ul>
      </nav>

    )
};

export default headersection;
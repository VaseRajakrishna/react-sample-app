import React from 'react';
import './Header.css';

const headersection =() => {
    return(
        <nav className="navbar navbar-expand-sm bg-primary navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="https://google.com">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://google.com">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://google.com">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://google.com">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://google.com">Blog</a>
          </li>
        </ul>
      </nav>

    )
};

export default headersection;
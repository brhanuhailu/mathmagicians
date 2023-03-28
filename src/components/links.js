import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../App.css';

const NaveLinks = () => (
  <nav>
    <div className="header">
      <h1>Math Magicians</h1>
      <section className="nav-link">
        <Link to="/" className="nav-item"> Home</Link>
        <h3>|</h3>
        <Link to="/calculator" className="nav-item">Calculator</Link>
        <h3>|</h3>
        <Link to="/Quote" className="nav-item">Quote</Link>
      </section>
    </div>
    <Outlet />
  </nav>
);

export default NaveLinks;

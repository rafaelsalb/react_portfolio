import 'bootstrap/js/src/collapse.js';
import { React, useEffect, useState } from 'react';
import NavbarItem from './NavbarItem.jsx';
import ColorModeSwitch from './ColorModeSwitch.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from '../pages/home/Home.jsx';
import { Donate } from '../pages/donate/Donate.jsx';
import { CacheMapping } from '../pages/cache_mapping/CacheMapping.jsx';


export function Navbar(props) {
  const ROOT_URL = 'react_portfolio';

  const brandStyle = {
    cursor: 'pointer',
  };

  useEffect(() => {}, [props.active]);

  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link to={ROOT_URL} style={{ textDecoration: 'none' }}>
              <a className="navbar-brand" onClick={() => props.setPage('Home')} style={brandStyle}>Rafael Albuquerque</a>
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavbarItem text="Home" active={props.active === "Home"} function={props.setPage} linkTo={ROOT_URL} onClick={() => setActive("Home")} />
                <NavbarItem text="Donate" active={props.active === "Donate"} function={props.setPage} linkTo={ROOT_URL + "/donate"} onClick={() => setActive("Donate")} />
                <NavbarItem text="Cache Mapping" active={props.active === "Cache Mapping"} function={props.setPage} linkTo={ROOT_URL + "/cache_mapping"}></NavbarItem>
              </ul>
              <ColorModeSwitch />
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>

        <Routes>
          <Route exact path={ROOT_URL + "/"} element={<Home />}></Route>
          <Route exact path={ROOT_URL + "/donate"} element={<Donate />}></Route>
          <Route exact path={ROOT_URL + "/cache_mapping"} element={<CacheMapping />}></Route>
        </Routes>
      </Router>

    </>
  )
}

export default Navbar;
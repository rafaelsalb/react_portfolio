import 'bootstrap/js/src/collapse.js';
import { React, useEffect, useState } from 'react';
import NavbarItem from './NavbarItem.jsx';
import ColorModeSwitch from './ColorModeSwitch.jsx';


export function Navbar(props) {
    const brandStyle = {
        cursor: 'pointer',
    };

    useEffect(() => {}, [props.active]);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" onClick={() => props.setPage('Home')} style={brandStyle}>Rafael Albuquerque</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavbarItem text="Home" active={props.active === "Home"} function={props.setPage} linkTo="Home" onClick={() => setActive("Home")} />
                            <NavbarItem text="Donate" active={props.active === "Donate"} function={props.setPage} linkTo="Donate" onClick={() => setActive("Donate")} />
                        </ul>
                        <ColorModeSwitch />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
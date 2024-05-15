import React from "react";
import CartWidget from '../CartWidget';

export const NavBar = () => {
    return (
        <header className="header">
            <nav className="nav">
                <h1 className="nav__title" id="navTitle">LabTech</h1>
                <ul className="nav__menu">   
                    <li><a className="nav__link" href="index.html">Inicio</a></li>
                    <li><a className="nav__link" href="#">Productos</a></li>
                    <li><a className="nav__link" href="#">Contacto</a></li>
                </ul>

                <div className="nav__dashboard">
                    <a className="nav__link--cart" href="#">
                        <CartWidget/>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;
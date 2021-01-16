import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
    return (
        <>
        <div className="navbar-fixed">
            <nav className="white" role="navigation">
                <div className="nav-wrapper container">
                    <Link to="#" id="logo-container" className="brand-logo">logo</Link>

                    <ul className="right hide-on-med-and-down">
                        <li><a href="/">HOME</a></li>
                        <li><a href="/about-us">ABOUT</a></li>
                        <li><a href="/contact">APPLY</a></li>
                    </ul>
                </div>

                <ul id="nav-mobile" className="sidenav">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about-us">ABOUT</a></li>
                    <li><a href="/contact">APPLY</a></li>
                </ul>

                <Link to="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
            </nav>
        </div>

            {/* <nav class="white" role="navigation">
                <div class="nav-wrapper container">
                    <a id="logo-container" href="#" class="brand-logo">Logo</a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="#">Navbar Link</a></li>
                    </ul>

                    <ul id="nav-mobile" class="sidenav">
                        <li><a href="#">Navbar Link</a></li>
                    </ul>
                    <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                </div>
            </nav> */}


        </>
    )
}
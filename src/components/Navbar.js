import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
    return (
        <>
        <div>
            <nav className="white" role="navigation">
                <div className="nav-wrapper container">
                    <Link to="#" id="logo-container" className="brand-logo">logo</Link>

                    <ul className="right hide-on-med-and-down">
                        <li><a href="/">HOME</a></li>
                        <li><a href="/about-us">ABOUT</a></li>
                        <li><a href="/contact">APPLY</a></li>
                    </ul>
                    
                <ul id="nav-mobile" className="sidenav">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about-us">ABOUT</a></li>
                    <li><a href="/contact">APPLY</a></li>
                </ul>

                <Link to="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                </div>

            </nav>
        </div>
        </>
    )
}
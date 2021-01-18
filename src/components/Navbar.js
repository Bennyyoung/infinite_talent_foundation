import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
    return (
        <>
        <div>
            <nav className="white" role="navigation">
                <div className="nav-wrapper container">
                    <Link to="#" id="logo-container" className="brand-logo"></Link>

                    <ul className="right hide-on-med-and-down">
                        <li><NavLink exact to="/" activeStyle={{color: 'green'}}>HOME</NavLink></li>
                        <li><NavLink exact to="/about-us" activeStyle={{color: 'green'}}>ABOUT</NavLink></li>
                        <li><NavLink exact to="/contact" activeStyle={{color: 'green'}}>APPLY</NavLink></li>
                    </ul>
                    
                <ul id="nav-mobile" className="sidenav">
                    <li><NavLink exact to="/" activeStyle={{color: 'green'}}>HOME</NavLink></li>
                    <li><NavLink exact to="/about-us" activeStyle={{color: 'green'}}>ABOUT</NavLink></li>
                    <li><NavLink exact to="/contact" activeStyle={{color: 'green'}}>APPLY</NavLink></li>
                </ul>

                <Link to="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                </div>

            </nav>
        </div>
        </>
    )
}
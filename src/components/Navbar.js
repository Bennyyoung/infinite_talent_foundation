import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "../images/logo.jpg"
import "./Navbar.css"

export default function Navbar() {
 return (
  <>
   <div>
    <nav className="white" role="navigation">
     <div className="nav-wrapper container">
      <Link to="/" id="logo-container" className="brand-logo"><img height="61px" width="80px" src={Logo} alt="brand logo" /></Link>

      <ul className="right hide-on-med-and-down">
       <li><Link exact to="/">HOME</Link></li>
       <li><Link to="/about-us">ABOUT US</Link></li>
       <li><Link to="/event">OUR EVENT</Link></li>
       <li><Link to="/team">MEET THE TEAM</Link></li>

       <li><Link to="/contact">APPLY</Link></li>
      </ul>

      <ul id="nav-mobile" className="sidenav">
       <li><NavLink exact to="/">HOME</NavLink></li>
       <li><Link to="/about-us">ABOUT</Link></li>
       <li><Link to="/event">OUR EVENT</Link></li>
       <li><Link to="/team">MEET THE TEAM</Link></li>

       <li><Link to="/contact">APPLY</Link></li>
      </ul>

      <Link to="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
     </div>

    </nav>
   </div>
  </>
 )
}
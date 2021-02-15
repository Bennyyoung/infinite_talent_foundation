import React from 'react'
import { Link } from "react-router-dom"
import please_leave_nothing from "../images/please_leave_nothing.jpeg"

export default function ThankYou() {
 return (
  <>
   <div id="index-banner" className="parallax-container">
    <div className="section no-pad-bot">
     <div className="container">
      <br /><br />
      <h1 className="header center teal-text text-lighten-2">Infinite Talent Foundation</h1>
      <div className="row center">
       <h5 className="header col s12 teal-text">Thank you for your submission</h5>
      </div>
      <div className="row center">
       <Link to="/" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Go to Home</Link>
      </div>
      <br /><br />

     </div>
    </div>
    <div className="parallax"><img src={please_leave_nothing} alt="Unsplashed background img 1" /></div>
   </div>
  </>
 )
}

import React from 'react'
import bg1 from '../images/background1.jpg'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
 return (
  <>
   <div id="index-banner" className="parallax-container">
    <div className="section no-pad-bot">
     <div class="container">
      <br /><br />
      <h1 className="header center teal-text text-lighten-2">Not Found</h1>
      <div className="row center">
       <h5 className="header col s12 teal-text">Ooops... You just hit a page that doesn&#39;t exist...</h5>
      </div>
      <div className="row center">
       <Link to="/" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Go to Home</Link>
      </div>
      <br /><br />
     </div>
    </div>
    <div className="parallax"><img src={bg1} alt="Unsplashed background img 1" /></div>
   </div>
  </>
 )
}

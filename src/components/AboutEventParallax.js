import React, { useEffect } from 'react'
import man_painting from "../images/man_painting.jpeg"
import lady_standing_painting from '../images/lady_standing_painting.jpeg'
import be_creative from "../images/be_creative.jpeg"
import hand_painting from "../images/hand_painting.jpeg"
import books from "../images/books.jpeg"
import M from "materialize-css"

const AboutEventParallax = (() => {
 useEffect(() => {
  let elements = document.querySelectorAll('.parallax')
  M.Parallax.init(elements)
 }, [])

 return (
  <>
   <div id="index-banner" class="parallax-container">
    <div className="section no-pad-bot">
     <div class="container">
      <br /><br />
      <h1 className="header center light text-lighten-2">About Event</h1>
      {/* <div className="row center">
       <h5 className="header col s12 light">Registration is now open for the 1st Annual African Inventor's Challenge</h5><br />
       <h6 className="header col s12 light">
        We are inspired to see the hard work of the<br />next generation of young African inventors<br />
       </h6>
      </div> */}
      <br /><br />

     </div>
    </div>
    <div className="parallax"><img src={man_painting} alt="Unsplashed background img 1" /></div>
   </div>

   <div className="container">
    <div className="section">
     <div className="row">
      <div className="col s12 center">
       <h3><i className="mdi-content-send brown-text"></i></h3>
       <h4>ABOUT OUR EVENT</h4>
       <p className="left-align light">The event is a one-day event designed to bring together youths and young adults from various communities to showcase their creative ingenuity. Groups of communities will be chosen to participate at any one time because of the number of communities we have to cover. If your community is not mentioned, please be patient with us. We intend to reach all the communities in the Local Government Areas in Nigeria so be rest assured that we will come to your community.  </p>
      </div>
     </div>
    </div>
   </div>

   <div className="parallax-container valign-wrapper">
    <div className="section no-pad-bot">
     <div className="container">
      <div className="row center">
       <h5 className="header col s12 light">Develop</h5>
      </div>
     </div>
    </div>
    <div className="parallax"><img src={lady_standing_painting} alt="lady standing painting" /></div>
   </div>

   <div className="container">
    <div className="section">
     <div className="row">
      <div className="col s12 center">
       <h3><i className="mdi-content-send brown-text"></i></h3>
       <h4>WHAT IS THE INVENTORS CHALLENGE</h4>
       <p className="left-align light">Africans around the world are invited to create inventions that will help solve problems in their homes, schools of communities using whatever tools and materials are available. The Inventor's Challenge fosters critical 21st century skills and attitudes, like creativity and innovation, optimism and empathy, and the willingness to experiment and take risks.<br /><br />

      Youth and young adults in our communities are invited to create things that will help solve problems in their homes, schools or communities using whatever tools are available. The Inventor's Challenge fosters critical 21st century skills and attitudes, like creativity and innovation and empathy, and the willingness to experiment and take risks.
       </p>
      </div>
     </div>
    </div>
   </div>

   <div className="parallax-container valign-wrapper">
    <div className="section no-pad-bot">
     <div className="container">
      <div className="row center">
       <h5 className="header col s12 light">Develop</h5>
      </div>
     </div>
    </div>
    <div className="parallax"><img src={be_creative} alt="lady standing painting" /></div>
   </div>

   <div className="container">
    <div className="section">
     <div className="row">
      <div className="col s12 center">
       <h3><i className="mdi-content-send brown-text"></i></h3>
       <h4>About Infinite Talents Inventors Challenge '21</h4>
       <p className="left-align light">The Infinite Talents Challenge 2021 is a one-day event designed to bring together young inventors from various communities  across the Africa to showcase their tech ingenuity to the public and in so doing, win various prizes.<br /> <br />
       
       At the event, our young ones drawn from 6 communities in ASALGA Local Government in Rivers State, will showcase and exhibit thier inventions or innovations or arts. They will also have the opportunity to share their creative process and what inspired them with the audience.</p>
      </div>
     </div>
    </div>
   </div>

   <div className="parallax-container valign-wrapper">
    <div className="section no-pad-bot">
     <div className="container">
      <div className="row center">
       <h5 className="header col s12 light">Create</h5>
      </div>
     </div>
    </div>
    <div className="parallax"><img src={hand_painting} alt="lady standing painting" /></div>
   </div>

   <div className="container">
    <div className="section">
     <div className="row">
      <div className="col s12 center">
       <h3><i className="mdi-content-send brown-text"></i></h3>
       <h4>Why Attend?</h4>
      </div>

      <div className="col s12 m4">
       <div className="icon-block">
        <h2 className="center brown-text"><i className="material-icons">lightbulb_outline</i></h2>
        <h5 className="center">Project Presentation</h5>

        <p className="light">You will hear how the African inventors tell the story of how their projects were conceived  and made</p>
       </div>
      </div>

      <div className="col s12 m4">
       <div className="icon-block">
        <h2 className="center brown-text"><i className="material-icons">group</i></h2>
        <h5 className="center">Inspiring Keynotes</h5>

        <p className="light">Keynote address from our sponsors, Government Officials & Tech Entrepreneurs</p>
       </div>
      </div>

      <div className="col s12 m4">
       <div className="icon-block">
        <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
        <h5 className="center">Product Exhibition</h5>

        <p className="light">There will be project exhibition by companies, sponsors and partners of young inventors</p>
       </div>
      </div>

     </div>

     <div className="row">
      <div className="col s12 center">
       <div className="col s12 m4">
        <div className="icon-block">
         <h2 className="center brown-text"><i className="material-icons">build</i></h2>
         <h5 className="center">Prizes & Awards Giving</h5>

         <p className="light">Prizes and Awards will be given to participants with outstanding project in different categories</p>
        </div>
       </div>

       <div className="col s12 m4">
        <div className="icon-block">
         <h2 className="center brown-text"><i className="material-icons">share</i></h2>
         <h5 className="center">SHARE</h5>

         <p className="light">Share what you have made in a meaningful public context. Tell your story. Let your work affect and inspire others</p>
        </div>
       </div>

      </div>
     </div>
    </div>
   </div>

   <div className="parallax-container valign-wrapper">
    <div className="section no-pad-bot">
     <div className="container">
      <div className="row center">
       <h5 className="header col s12 light">Create</h5>
      </div>
     </div>
    </div>
    <div className="parallax"><img src={books} alt="lady standing painting" /></div>
   </div>


   <div className="container">
    <div className="section">
     <div className="row">
      <div className="col s12 center">
       <h3><i className="mdi-content-send brown-text"></i></h3>
       <h4>Join The Global Movement</h4>
       <p className="left-align light">Help us inspire others and build the movement to foster creativity and entrepreneurship in youths and young adults around the world!</p>

       <h4>Participate in the Inventor's Challenge</h4>
       <p className="left-align light">We designed the Inventor’s Challenge to provide an opportunity for youths and young adults, both in and outside of school, to engage in a creative process that both fosters 21st century skills and is rewarding and fun.</p>
      </div>
     </div>
    </div>
   </div>
  </>
 )

})

export default AboutEventParallax

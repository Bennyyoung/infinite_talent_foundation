import React, { useEffect, useState } from 'react'
import hands_people_woman_working from "../images/hands-people-woman-working.jpg"
import lady_painting from '../images/lady_painting.jpeg'
import lady_on_pixel_dust from "../images/lady_on_pixel_dust.jpeg"
import M from "materialize-css"

const AboutParallax = (() => {
 const [readMore, setReadMore] = useState(false);

 useEffect(() => {
  let elements = document.querySelectorAll('.parallax')
  M.Parallax.init(elements)
 }, [])

 // const diversity_text = <p className="light">
 //     Because diversity and inclusion is at the heart of ITF, our policies embrace differences, creates possibilities and a platform for all involved to progress together. Equal opportunities will be given to all participants regardless of gender, religion or belief.
 // </p>

 // const purpose_text = <p className="light">
 //      We hope to achieve this by promoting innovation, creativity and arts and culture. We will strive to improve the livelihood of those living in our local communities with the hope that this might reduce rural-urban migration. We aspire to cultivate a good relationship with the communities, individuals and any organisation we interact with. At the heart of Infinite Talents Foundation is respect towards our employees, volunteers, communities, individuals and organisations we interact with. To serve everyone we liase with honourably and with integrity and commitment.
 // </p>

 // const innovation_text = <p className="light">
 //     It is the intention of ITF to source these talents and promote them in such a way that would cause a snow ball effect. In the sense that, other youths in the community will aspire to be like those who have been successful or to emulate them.
 // </p>

 // const diversity_linkName = readMore ? 'Read Less << ':'Read More >>'
 // const purpose_linkName = readMore ? 'Read Less << ':'Read More >>'
 // const innovation_linkName = readMore ? 'Read Less << ':'Read More >>'

 return (
  <>
   <div id="index-banner" class="parallax-container">
    <div className="section no-pad-bot">
     <div class="container">
      <br /><br />
      <h1 className="header center light text-lighten-2">About Us</h1>
      <div className="row center">
       <h5 className="header col s12 teal-text"><b>Here is who we are</b></h5>
      </div>
      <br /><br />

     </div>
    </div>
    <div className="parallax"><img src={hands_people_woman_working} alt="Unsplashed background img 1" /></div>
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
    <div className="parallax"><img src={lady_painting} alt="Unsplashed background img 2" /></div>
   </div>



   <div className="container">
    <div className="section">
     <div className="row">
      <div className="col s12 m4">
       <div className="icon-block">
        <h2 className="center brown-text"><i className="material-icons">nature_people</i></h2>
        <h5 className="center">Diversity & Inclusion</h5>

        <p className="light">Implementing a true diversity and inclusive policies across the whole spectrum of our operations will not only grow Infinite Talents Foundation but will also enable us to attract and promote talents, and to fulfil part of our vision of integration.

                                {/* Because diversity and inclusion is at the heart of ITF, our policies embrace differences, creates possibilities and a platform for all involved to progress together. Equal opportunities will be given to all participants regardless of gender, religion or belief. */}

         {/* <a style={{color: 'teal', fontWeight: 'bold', textDecoration: 'none', cursor: 'pointer'}} onClick={()=>{setReadMore(!readMore)}}>{diversity_linkName}</a>
                                {readMore && diversity_text} */}


        </p>
       </div>
      </div>

      <div className="col s12 m4">
       <div className="icon-block">
        <h2 className="center brown-text"><i className="material-icons">group</i></h2>
        <h5 className="center">Our Purpose, Values & Principles</h5>

        <p className="light">We believe that for Infinite Talents Foundation to succeed, we must make a positive impact in society by addressing the challenges faced by local communities in Nigeria.

        We hope to achieve this by promoting innovation, creativity and arts and culture.
                                {/* We will strive to improve the livelihood of those living in our local communities with the hope that this might reduce rural-urban migration. We aspire to cultivate a good relationship with the communities, individuals and any organisation we interact with. At the heart of Infinite Talents Foundation is respect towards our employees, volunteers, communities, individuals and organisations we interact with. To serve everyone we liase with honourably and with integrity and commitment. */}

         {/* <a style={{color: 'teal', fontWeight: 'bold', textDecoration: 'none', cursor: 'pointer'}} onClick={()=>{setReadMore(!readMore)}}>{purpose_linkName}</a>
                                {readMore && purpose_text} */}

        </p>
       </div>
      </div>

      <div className="col s12 m4">
       <div className="icon-block">
        <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
        <h5 className="center">Innovation</h5>

        <p className="light">Innovation is at the heart of ITF. We are aware that local communities might not be endowed with modern technological prowess that is why we believe that inspiring our youths to have a creative mindset will one day produce young talents with ground breaking innovations.

                                {/* It is the intention of ITF to source these talents and promote them in such a way that would cause a snow ball effect. In the sense that, other youths in the community will aspire to be like those who have been successful or to emulate them. */}

         {/* <a style={{color: 'teal', fontWeight: 'bold', textDecoration: 'none', cursor: 'pointer'}} onClick={()=>{setReadMore(!readMore)}}>{innovation_linkName}</a>
                                    {readMore && innovation_text} */}
        </p>
       </div>
      </div>
     </div>

    </div>
   </div>

   <div className="parallax-container valign-wrapper">
    <div className="section no-pad-bot">
     <div className="container">
      <div className="row center">
       <h5 className="header col s12 light">Inspire</h5>
      </div>
     </div>
    </div>
    <div className="parallax"><img src={lady_on_pixel_dust} alt="Unsplashed background img 2" /></div>
   </div>

   <div className="container">
    <div className="section">
     <div className="row">
      <div className="col s12 center">
       <h3><i className="mdi-content-send brown-text"></i></h3>
       <h4>Our Strategy</h4>
       <p className="left-align light">Our strategy is to continuously create awareness of the fact that everyone has the ability to be creative in whatever capacity possible and to help support viable ventures by seeking funding for such. ITF’s purpose is to promote innovation, creativity and arts and culture.
       Therefore, our strategy will be:
                            <ul>
         <li>• To organise periodic events for individuals or groups to showcase their creative flair.</li>
         <li>• To give necessary support for new businesses under the umbrella of Infinite Talents Foundation</li>
         <li>• To do social events that bother on improving the creative mindset of the communities we interact with.</li>
        </ul>
                            Challenging though this might look, however ITF is determined to make a positive impact on Nigeria’s youths and young adults in our local communities. We will achieve this by consistently improving the quality of our practice; increasing trust with the communities and maintaining a good relationship with all parties we interact with.
                            </p>
      </div>
     </div>
    </div>
   </div>
  </>
 )

})

export default AboutParallax

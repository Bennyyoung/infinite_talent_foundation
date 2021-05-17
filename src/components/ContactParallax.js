import React, { useEffect, useState } from 'react'
import lady_on_keyboard from "../images/lady_on_keyboard.jpg"
import man_with_macbook from "../images/man_with_macbook.jpeg"
import M from "materialize-css"
import { navigate } from 'gatsby-link';

function encode(data) {
 const formData = new FormData()

 for (const key of Object.keys(data)) {
  formData.append(key, data[key])
 }

 return formData
}


const ContactParallax = (() => {
 // const [readMore, setReadMore] = useState(false);
 useEffect(() => {
  let elements = document.querySelectorAll(".parallax");
  M.Parallax.init(elements)
 }, [])

 // const extraContent = <p className="left-align light">
 //     <p>7.	Participants must submit their entry form no later than 12pm on January……, 2020 to a member of Infinite Talent Foundation at the designated address and obtain a receipt from the member or contact us through Infinitetalntfoundation@gmail.com. </p>
 //     <p>8.	Entry to this Talent Show is free; participants are not to pay any fee. </p>
 //     <p>9.	Participants must arrive to the talent show located at the designated address no later than 11am on January……… </p>
 //     <p>10.  Participants must perform acts inside their scope of abilities as ITF will not accept risks of injury. </p>
 //     <p>11.	Winners will be chosen based on average score composed by judges. Presentations and acts will be judged based on creativity, innovation, quality, and stage presence.  All judges are final and the winners will be notified accordingly. </p>
 //     <p>12.	To avoid copyright issues presentations are expected to be original. </p>
 // </p>

 // const linkName = readMore ? 'Read Less << ' : 'Read More >>'
 const [state, setState] = useState({})


 const handleChange = (e) => {
  setState({ ...state, [e.target.name]: e.target.value })
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  const form = e.target
  fetch('/', {
   method: 'POST',
   body: encode({
    'form-name': form.getAttribute('name'),
    ...state,
   }),
  })
   .then(() => navigate(form.getAttribute('action')))
   .catch((error) => alert(error))
 }

 return (
  <>
   <div id="index-banner" className="parallax-container">
    <div className="section no-pad-bot">
     <div className="container">
      <br /><br />
      <h1 className="header center teal-text">Application Form</h1>
      <div className="row center">
       <h5 className="header col s12 teal-text">Let us know how we can reach you</h5>
      </div>
      <br /><br />

     </div>
    </div>
    <div className="parallax"><img src={lady_on_keyboard} alt="Unsplashed background img 1" /></div>
   </div>

   <div className="container">
    <div className="section">
     <div className="row">
      <div className="col s12 center">
       <h3><i className="mdi-content-send brown-text"></i></h3>
       <h4>HOW TO PARTICIPATE</h4>
       <div className="left-align light">
        <p>1. Find a problem you want to solve you in your community, home or school</p>
        <p>2. Invent something to solve it it could be Physical or Digital</p>
        <p>3. Make a video sharing your invention to the world</p>
       </div>
      </div>
     </div>
    </div>
   </div>

   <div className="container">
    <div className="section">
     <div className="row">
      <div className="col s12 center">
       <h3><i className="mdi-content-send brown-text"></i></h3>
       <h4>APPLICATION FORM</h4>
      </div>
     </div>
    </div>
   </div>


   <div className="row" style={{ alignItems: 'center' }}>
    <form
     name="contact-form"
     method="post"
     data-netlify="true"
     data-netlify-honeypot="bot-field"
     action="/thank-you"
     className="col s9"
     autocomplete="on"
     onSubmit={handleSubmit}
    >
     <div className="row">
      <div className="input-field col s12">
       <i className="material-icons prefix">account_circle</i>
       <input id="name" type="text" name="Name" className="validate" required onChange={handleChange} />
       <label for="name">Name (if group, please provide group name and members): </label><br />
      </div>
     </div>

     <div className="row">
      <div className="input-field col s12">
       <i className="material-icons prefix">date_range</i>
       <input placeholder="DD/MM/YYYY" id="date" type="date" className="datepicker" name="DOB" onChange={handleChange} required />

       <label for="date">Birthdate(s): </label>
      </div>
     </div>

     <div className="row">
      <div className="input-field col s12">
       <i className="material-icons prefix">home</i>
       <input id="icon_address" type="text" className="validate" required name="Address" onChange={handleChange} />
       <label for="icon_address">Address(es): </label>
      </div>
     </div>

     <div className="row">
      <div className="input-field col s12">
       <i className="material-icons prefix">phone</i>
       <input id="icon_telephone" type="tel" className="validate" required name="Phone" onChange={handleChange} />
       <label for="icon_telephone">Telephone</label>
      </div>
     </div>
     <div className="row">
      <div className="input-field col s12">
       <i className="material-icons prefix">email</i>
       <input id="icon_email" name="Email" onChange={handleChange} type="email" className="validate" required />
       <label for="icon_email">Email</label>
      </div>
     </div>

     <div className="row">
      <div className="input-field col s12">
       <i className="material-icons prefix">lightbulb_outline</i>
       <textarea placeholder="Textareas will auto resize to the text inside." id="textarea" className="materialize-textarea" name="Message" onChange={handleChange} required></textarea>
       <label for="textarea">Talent Description: Describe your idea in the box below. Include brief plans on how your idea can be put into action.</label>
      </div>
     </div>

     <div className="row">
      <div className="input-field col s12">
       <i className="material-icons prefix">music_note</i>
       <input id="icon_music" type="text" name="Song Performing" onChange={handleChange} className="validate" required />
       <label for="icon_music">Song Performing: </label>
      </div>
     </div>

     <div className="row">
      <div className="input-field col s12">
       <i className="material-icons prefix">sentiment_very_satisfied</i>
       <textarea name="Interesting facts about Performance" onChange={handleChange} placeholder="Textareas will auto resize to the text inside." id="interesting_fact" className="materialize-textarea" required></textarea>
       <label for="interesting_fact">Unusual/Interesting facts about performance: </label>
      </div>
     </div>
     <input type="submit" value="Submit" className="btn-large waves-effect waves-light teal lighten-1" />
    </form>

   </div>

   <div className="parallax-container valign-wrapper">
    <div className="section no-pad-bot">
     <div className="container">
      <div className="row center">
       <h5 className="header col s12 teal-text"><b>You can reach us below</b></h5>
      </div>
     </div>
    </div>
    <div className="parallax"><img src={man_with_macbook} alt="Unsplashed background img 3" /></div>
   </div>

   <div className="row">
    <div className="col s12 center">
     <h3><i className="mdi-content-send brown-text"></i></h3>
     <div>
      <i className="material-icons prefix" style={{ paddingTop: '2rem' }}>email</i><a href="mailto:infinitetalentfoundation@gmail.com" className="left-align light" style={{ color: 'black', paddingTop: '-2rem' }}>infinitetalentfoundation@gmail.com</a><br />

     </div>
     <a href="#" className="left-align light" style={{ color: 'black' }}><i className="material-icons prefix">call</i>+44 7724 853 707</a><br />
     <a href="#" className="left-align light" style={{ color: 'black' }}><i className="material-icons">phone_in_talk</i>081 238 02150</a><br />
     <a href="#" className="left-align light" style={{ color: 'black' }}><i className="material-icons">home</i>202 Aba Road</a>
    </div>
   </div>
  </>
 )
})

export default ContactParallax
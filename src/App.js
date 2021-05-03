// import './App.css';
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar';
import HomeParallax from './components/HomeParallax';
import Footer from './components/Footer';
import ContactParallax from './components/ContactParallax'
import AboutParallax from './components/AboutParallax'
import NotFoundPage from './components/NotFoundPage'
import AboutEventParallax from './components/AboutEventParallax';
import MeetTheTeam from './components/MeetTheTeam';
import ThankYou from './components/ThankYou';



function App() {
 return (
  <div className="App">
   <Navbar />
   <Switch>
    <Route exact path="/" component={HomeParallax}></Route>
    <Route path="/about-us" component={AboutParallax}></Route>
    <Route path="/contact" component={ContactParallax}></Route>
    <Route path="/event" component={AboutEventParallax}></Route>
    <Route path="/team" component={MeetTheTeam}></Route>

    <Route path="/thank-you" component={ThankYou}></Route>


    <Route component={NotFoundPage} />
   </Switch>
   <Footer />

  </div>
 );
}

export default App;

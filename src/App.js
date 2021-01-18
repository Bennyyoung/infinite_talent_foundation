// import './App.css';
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar';
import HomeParallax from './components/HomeParallax';
import Footer from './components/Footer';
import ContactParallax from './components/ContactParallax'
import AboutParallax from './components/AboutParallax'
import NotFoundPage from './components/NotFoundPage'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeParallax}></Route>
        <Route exact path="/about-us" component={AboutParallax}></Route>
        <Route exact path="/contact" component={ContactParallax}></Route>
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />

    </div>
  );
}

export default App;

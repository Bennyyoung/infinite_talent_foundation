
import './App.css';
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact'
import About from './components/About'
import NotFoundPage from './components/NotFoundPage'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about-us" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />

    </div>
  );
}

export default App;

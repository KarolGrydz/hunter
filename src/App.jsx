import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './scenes/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Expeditions from './components/Expeditions';

import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/wyprawy/" component={Expeditions} />
        {/* <Route exact path='/kim-jestesmy/' component={About} />
        <Route exact path='/kontakt/' component={Contact} />
        <Route exact path='/przyjaciele/' component={Friends} />
        <Route exact path='/wyprawy/:id' component={SingleBlogPost} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

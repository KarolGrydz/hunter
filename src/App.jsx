import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store/store';

import Home from './scenes/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './components/Blog/Blog';
import BlogSingle from './components/Blog/BlogSingle';
import About from './components/About';

import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/wyprawy/" component={Blog} />
          <Route exact path="/wyprawy/:id" component={BlogSingle} />
          <Route exact path="/kim-jestesmy/" component={About} />
          {/*
          <Route exact path='/kontakt/' component={Contact} />
        <Route exact path='/przyjaciele/' component={Friends} /> */}
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;

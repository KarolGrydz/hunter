import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './components/pages/Home';
import { About } from './components/layout/About';
import { Contact } from './components/pages/Contact';
import { Blog } from './components/pages/Blog';
import { Friend } from './components/pages/Friend';
import { BlogSinglePost } from './components/layout/BlogSinglePost';

import { TripsState } from './context/trips/TripsState';

function App() {
  return (
    <TripsState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/kim-jestesmy/" component={About} />
          <Route exact path="/kontakt/" component={Contact} />
          <Route exact path="/wyprawy/" component={Blog} />
          <Route exact path="/przyjaciele/" component={Friend} />
          <Route exact path="/wyprawy/:id" component={BlogSinglePost} />
        </Switch>
        <Footer />
      </Router>
    </TripsState>
  );
}

export default App;

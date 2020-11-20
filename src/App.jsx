import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './scenes/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path='/kim-jestesmy/' component={About} />
        <Route exact path='/kontakt/' component={Contact} />
        <Route exact path='/wyprawy/' component={Blog} />
        <Route exact path='/przyjaciele/' component={Friends} />
        <Route exact path='/wyprawy/:id' component={SingleBlogPost} /> */}
      </Switch>
    </Router>
  );
}

export default App;

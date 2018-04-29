import React from 'react';
import { Route, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';


import Home from '../home';
import About from '../about';
import detailFeed from '../detailFeed';

import '../../App.css';

const App = () => (
  <div>
    <AppBar
    iconElementLeft={<Link className="header__link" to="/">Home</Link>}
    iconElementRight={<Link className="header__link" to="/about-us">About</Link>}>
    </AppBar>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/detailFeed" component={detailFeed} />
    </main>
  </div>
);

export default App;

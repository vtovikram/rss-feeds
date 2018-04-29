import React from 'react';
import { Route, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

import Home from '../home';
import About from '../about';
import detailFeed from '../detailFeed';

import '../../App.css';


const styles = {
  title: {
    'marginTop': '12px',
  }
};

const App = () => (
  <div>

    <AppBar
    iconElementLeft={<div style={styles.title}><Link className="header__link" to="/">Home</Link>
    <Link className="header__link" to="/about-us">About</Link></div>}>
    </AppBar>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/detailFeed" component={detailFeed} />
    </main>
  </div>
);

export default App;

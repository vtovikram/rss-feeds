import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import detailFeed from '../detailFeed';

import logo from '../../logo.svg';
import '../../App.css';

const App = () => (
  <div>
  <article className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Fancy News Feeds</h1>
    </header>
  </article>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/detailFeed" component={detailFeed} />
    </main>
  </div>
);

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TwitterPanel from './twitter/views/TwitterPanel';
import Tweet from './twitter/views/Tweet';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

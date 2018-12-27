import React from 'react';
import { Link, Route } from 'react-router-dom';
import nineteen from './nineteen';
import harryPotter from './harry-potter';

export default props => (
  <div>
    <h1>Articles</h1>
    <ul>
      <li>
        <Link to="/articles/1984">1984</Link>
      </li>
      <li>
        <Link to="/articles/hp">Harry Potter</Link>
      </li>
    </ul>
    <Route path="/articles/1984" component={nineteen} />
    <Route path="/articles/hp" component={harryPotter} />
  </div>
);

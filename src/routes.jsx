import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import CharacterList from './components/CharacterList';
import NotFoundPage from './components/NotFoundPage';

// App funciona como un layout y HomePage como página principal
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/character" component={CharacterList} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

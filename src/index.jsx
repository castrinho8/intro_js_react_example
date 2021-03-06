/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

require('./favicon.ico'); // Tell webpack to load favicon.ico

render(
  <Provider>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);

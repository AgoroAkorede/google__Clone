import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './redux/store'
import { ResultProvider } from './ResultProvider/ResultProvider'
import reducer,{initialState} from './ResultProvider/reducer'

import App from './App';

render(
  <ResultProvider initialState={initialState} reducer={reducer}>
      <Router>
        <App />
    </Router>
  </ResultProvider>
  , document.getElementById('root')
);



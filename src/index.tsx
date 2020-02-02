import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'index.css';
import store from 'store/index';
import Router from 'Router';
import 'css/style.css';
import * as serviceWorker from 'serviceWorker';

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.querySelector('#root')
);

serviceWorker.unregister();






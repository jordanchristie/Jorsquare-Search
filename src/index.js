import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as styles from './styles/style.css'


import App from '../src/components/app'
import rootReducer from '../src/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));



render(
  <Provider store={store}>
    <App style={styles}/>
  </Provider>
  , document.getElementById('root'));

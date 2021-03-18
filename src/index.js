import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as actionTypes from './store/actionTypes/actionTypes';

import overlayReducer from './store/reducers/overlayReducer';
import firstVisitReducer from './store/reducers/firstVisitReducer';
import instructionsReducer from './store/reducers/instructionsReducer';
import stageOneReducer from './store/reducers/stageOneReducer'
import stageTwoReducer from './store/reducers/stageTwoReducer';
import stageThreeReducer from './store/reducers/stageThreeReducer';


const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const appReducer = combineReducers(
  {
    vrlyrdcr: overlayReducer,
    frsttmvstrdcr: firstVisitReducer,
    nstrctnsrdcr: instructionsReducer,
    stgnrdcr: stageOneReducer,
    stgtwrdcr: stageTwoReducer,
    stgthrrdcr: stageThreeReducer
  }
)
const rootReducer = (state, action) => {
  if (action.type === actionTypes.GAME_LOST) {
    state = undefined
  }

  return appReducer(state, action)
}


const store = createStore(rootReducer, persistedState)

store.subscribe(()=>{
  window.localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={ store }>
        <App />
      </Provider>
    </BrowserRouter>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

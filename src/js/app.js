import '../css/app.scss';

// import react
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import reducers from './redux/reducers';
//import * as reducers from './redux/reducers';

// const createStoreWithThunk = applyMiddleware(thunk)(createStore);
// const reducer = combineReducers(reducers);
// const store = createStoreWithThunk(reducer);

const store = createStore(reducers)

// import component
import App from './component/App';

// Render
render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('app')
);

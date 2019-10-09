import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

import reducer from './reducer';

export const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

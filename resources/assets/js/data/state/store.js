import {createStore, combineReducers} from 'redux';
import user from './reducers/user';
import time from './reducers/time';
import defaultState from './default';

const reducers = {
    user,
    time
};

export default createStore(
    combineReducers(reducers),
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
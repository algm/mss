import { Provider } from 'react-redux';
import React from 'react';
import store from '../data/state/store'
import AppLayout from './layouts/AppLayout';

const App = () => (
    <Provider store={store}>
        <AppLayout />
    </Provider>
);

export default App;
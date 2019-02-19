import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import SearchProvider from './SearchProvider';


ReactDOM.render(
    <SearchProvider>
    <App />
    </SearchProvider>
    ,
    document.getElementById('root'));



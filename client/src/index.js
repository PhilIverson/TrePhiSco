import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import SearchProvider from './SearchProvider';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <SearchProvider>
            <App />
        </SearchProvider>
    </BrowserRouter>
    ,
    document.getElementById('root'));



import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"

import ContextManager from './context/ContextManager'

import AppRouter from './AppRouter';

// src/index.js
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextManager>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </ContextManager>
);

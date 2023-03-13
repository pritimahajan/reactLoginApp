import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {GoogleOAuthProvider} from '@react-oauth/google';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <GoogleOAuthProvider clientId="812424363237-9mhd7jspac18l8fkm2i2qdn6dfg4ra89.apps.googleusercontent.com">
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </GoogleOAuthProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

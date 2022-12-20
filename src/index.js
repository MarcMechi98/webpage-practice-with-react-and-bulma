import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Defining the root element
const element = document.querySelector('#root');
const root = ReactDOM.createRoot(element);

// Rendering the App component
root.render(<App />);
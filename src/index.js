import React from 'react';
import ReactDOM from 'react-dom/client';
import MarkdownPreviewer from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MarkdownPreviewer />
  </React.StrictMode>
);
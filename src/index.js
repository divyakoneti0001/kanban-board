import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Kanbanboard from './components/Kanbanboard';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Kanbanboard />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

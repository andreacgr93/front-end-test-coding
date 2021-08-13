import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Exploro from './components/Exploro';

ReactDOM.render(
  <React.StrictMode>
    <Exploro />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render("ExpLoro App", document.getElementsByTagName("title")[0]);

reportWebVitals();

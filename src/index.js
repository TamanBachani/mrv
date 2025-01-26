import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DetailsState from './contexts/details/DetailsState';
import LoadingState from './contexts/loading/LoadingState';

ReactDOM.render(
  <React.StrictMode>
    <LoadingState>
      <DetailsState>
        <App />
      </DetailsState>
    </LoadingState>
  </React.StrictMode>,
  document.getElementById("root")
);


import React from 'react';
import './assets/styles/_typography.scss';
import './assets/styles/reset.css';
import './assets/styles/_common.scss';
import './assets/styles/font.css';
import Router from './routers/Router';
import './App.scss';

function App() {
  return (
    <div className="body">
      <Router />
    </div>
  );
}

export default App;

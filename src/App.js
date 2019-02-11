import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <iframe src='https://www.youtube.com/embed/s5_5ua03X0k'
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='nebunia_lu_salam'
          />
        </header>
      </div>
    );
  }
}

export default App;

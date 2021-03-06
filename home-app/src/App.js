import React, { Component } from 'react';

import './styles/page.css';

import { Header } from './components/header';
import { Portfolio } from './components/portfolio';

class App extends Component {

  render() {
    return (
      <div className="home_container">
        <Header />
        <Portfolio />
      </div>
    );
  }
}

export default App;

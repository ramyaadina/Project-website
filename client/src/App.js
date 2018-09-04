import React, { Component } from 'react';
import { HashRouter } from "react-router-dom";

import Text from './Components/Text.js'
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Nav from './Components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HashRouter>
          <Nav />
        </HashRouter>
        <Text />
        <Footer />
      </div>
    );
  }
}

export default App;

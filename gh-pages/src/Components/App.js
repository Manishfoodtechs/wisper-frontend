import React, { Component } from 'react';

import 'antd/dist/antd.css'
import UI from './UI'

import Config from '../config'

import Hero from './Hero'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero repo={Config.repository}></Hero>
      </div>
    );
  }
}

export default App;

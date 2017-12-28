import React, { Component } from 'react'

import Navbar from '../Navbar/index.jsx'
import Sidebar from '../Sidebar/index.jsx'

export default class ViewChannels extends Component {
  render () {
    return (
      <div className="App-view">
        <Navbar />
        <Sidebar />
      </div>
    )
  }
}
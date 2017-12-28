import React, { Component } from 'react'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

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
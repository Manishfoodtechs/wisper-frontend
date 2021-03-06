import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Navbar from '../Navbar/index.jsx'
import Sidebar from '../Sidebar/index.jsx'

class ViewChannelSingle extends Component {
  render () {
    return (
      <div className="App-view">
        <Navbar />
        <Sidebar />
      </div>
    )
  }
}

export default withRouter(ViewChannelSingle)
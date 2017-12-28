import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

import DemoServer from '../../Helpers/demoServer.json'

class ViewChannelSingle extends Component {
  constructor (props) {
    super(props)
  }

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
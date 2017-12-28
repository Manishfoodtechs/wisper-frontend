import React, { Component } from 'react'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

class ViewChannelSettings extends Component {
  constructor (props) {
    super(props)

    this.state = {
      channelId: this.props.match.params.channelId
    }
  }

  render () {
    return (
      <div className="App-view">
        <Navbar />
        <Sidebar />
      </div>
    )
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      channelId: newProps.match.params.channelId
    })
  }
}

export default ViewChannelSettings
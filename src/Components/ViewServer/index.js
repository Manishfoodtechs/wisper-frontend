import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import DemoServer from '../../Helpers/demoServer.json'

export default class ViewServer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      defaultChannel: DemoServer.defaultChannel
    }
  }

  render () {
    return (
      <div>
        <h1>Server</h1>
        <Redirect to={`/server/channels/${this.state.defaultChannel}`} />
      </div>
    )
  }
}
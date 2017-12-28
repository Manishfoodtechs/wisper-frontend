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
        <Redirect to={`/server/channels/${this.state.defaultChannel}`} />
      </div>
    )
  }
}
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import DemoServer from '../../Helpers/demoServer.json'

class ViewChannelSingle extends Component {
  constructor (props) {
    super(props)

    this.state = {
      channelId: this.props.match.params.channelId
    }

    this.currentChannel = false
  }

  render () {
    this.currentChannel = DemoServer.channels[this.state.channelId]
    return (
      <div>
        <h1>Channel: {this.currentChannel.name}</h1>
        <h4>Info</h4>
        <ul>
          <li>
            <strong>Guests allowed:</strong> { (this.currentChannel.allowGuests) ? 'yes' : 'no' }
          </li>
        </ul>
        <h4>Permissions</h4>
        <ul>
          {this.renderPermissions()}
        </ul>
        <Link to={this.getSettingsLink()}>Settings</Link>
      </div>
    )
  }

  renderPermissions () {
    const permissionKeys = Object.keys(this.currentChannel.permissions)
    const permissionValues = Object.values(this.currentChannel.permissions)

    return permissionValues.map((permission, key) => {
      return (
        <li key={key}>{permissionKeys[key]}: { (permission) ? 'yes' : 'no' }</li>
      )
    })
  }

  getSettingsLink () {
    return `/server/channels/${this.state.channelId}/settings`
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      channelId: newProps.match.params.channelId
    })
  }
}

export default withRouter(ViewChannelSingle)